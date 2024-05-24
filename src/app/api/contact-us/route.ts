import { contactForm } from "@/validation/validator";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/spreadsheets",
    projectId:process.env.GOOGLE_PROJECT_ID,
    credentials:{
      client_email:process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDw4X+RBuvO3f+S\nVIVSv047RgFOWxx0mAymDr0rktFFXEpgZ9e4izQzCpJqTN4nPnRWrCFZG4eQdKp0\nFKS39RSEJ9r7b8m6EFfEiR0Uz8K0Oi5tmnWifBOepnluan2xhIVRCP1OaEL1RiOB\ncDxA0qKSV/umiOrONJiIP6pBaeQ2ABA2iGc02tR7C4msAXc/FqR3RDUBohwZLExV\nOKjfjGr9SkueRHGKvOGOGFZvy11eq7zOYZm8GyeIWQPyZTmZi4iYp3kxC39M5gGN\nOR8u7C1VzuuZ7tFgYKOUvSj7byei0qQXnP//gOwgbndSEnswirY4JMSABa3BGERT\nkiNNQD2NAgMBAAECggEAScZGs7xS7IDBjaelTbqZ0z2VmNH+3RbUiOdquLW2sm+Z\nt/0V7Md1rUxHm5b/UzWlnAYMEKaF1pBkxDiuWkkNh4xNXUTXm8z1lJQJ/B3FnD1V\niuwLq0AlIioKdu7WoE/eJPuD2UfFeimJJlOhoJjigb/Aqziz8YPaU6BsHKy54G98\nYnsJZUVTNlrDHkZcIWRqkhTf1dQLicZOE5s0aMCuk7ak2y1vVMWr17CgLAvEVdXH\n6XGmopr5HLfqDG3T/ziCAHeWCukdqyI6RSRJdbl9LS4GdEBQrmk1I/mRBnyZoj6C\nlUVTtGkMvEvlEUTauq3PDGGEfTljTjeJSDDXniyuYQKBgQD9ojcYSsKbOwjGlOkw\nbtXwHELkGcIoz9dSqv4eSGVUc+Xi9az7ziu1m8j3EqL/A+YbyYWEA7P/Y1xfrMUu\nh96j/8e/lf1nY1SnlvnzpolpUwJbyYR25SCgN1Dphv3nBUB3xiaZM2sj3/us64eL\nHcePD/+KojxhCvurzs9nFcohtwKBgQDzINLxPpgQffhwH9nNS7SQJy37Xi7n/RcL\nFpIv71iVGmqGBU9kkSOuyTxlbSBnuJ1082RmRZh+Q5VmfJ9S1e3FKJ4jE1zA0wUW\n7zmTenjEib9abAfuV9IUIlzG9B2VhX1MAI0+kvz5QuOfEqW4rO1FOoELWwHryQ20\nlMCybx3K2wKBgQCcbMYz+i+pkzAnYUGsOD9DtfpfOa+wgfbXqlPNk3LDMjOO1VwZ\ndJ8qg2jfUKQsSVhKvO/Wan5BvSMEcsatmuhqFt83vqapc+6K6adAaO6IgcSLnW5P\n8aI8jcEeNb40E94dwJyfkcG7P3G1xRE0cGpaRlChTMuWQjLTVFo/xoWCYwKBgQDN\nHD75iT4Og8epCCXeHWUqS/Nt4ioeSxU6pIMV741C1PNTN32gMRXyahEK3EJ/Xm9v\n77oe0c3xj6ClwrNC1fnu3/JxUu9oOV5M1+sx8Rubaz5E0WjrealglRDCQ8YFk4V+\nLeT7ClRjETwowjmPEExnoBCn/NIlEgv+8ZOTtUxkCwKBgHFf5XRHE+TvoZ+HB7mB\nDJeVMHay6jeY9Y4CD/pbt66eoIjTNQ/1g6AH0izm2ySIl7PXoqdesWbE8hBXVFuE\nehnfbbSNOcTDhWtENq7dataHOTKrEzX0F1ezc1vzFBgaEygGxhEplWlqcPWKaWee\nLjOlgWd5LYXdaJMOpMtNLZPP\n-----END PRIVATE KEY-----\n",
    }
  });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const service = google.sheets({ version: "v4", auth });

  let range = ["Sheet2!A:E"];

  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = contactForm.parse(
      body.values
    );

    let values = [[name, email, phone, subject, message]];

    const resource = {
      values,
    };
    //@ts-ignore
    const result = await service.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource,
    });

    return NextResponse.json({ result });
  } catch (err) {
    //@ts-ignore
    throw new Error(err);
  }
}