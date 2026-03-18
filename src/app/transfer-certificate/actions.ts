"use server";

import { server_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";

// Typings for the TC record as defined in src/type.d.ts
interface TransferCertificate {
  id: string;
  tcNumber: string;
  studentName: string;
  admissionNumber: string;
  fatherName: string;
  studentClass: string;
  issueDate: string;
  dob: string;
  verificationStatus: "Verified" | "Pending" | "Invalid";
}

interface TCResponse {
  transferCertificates: TransferCertificate[];
}

export async function verifyTransferCertificate(formData: FormData) {
  const searchBy = formData.get("searchBy") as string;
  const searchValue = formData.get("searchValue") as string;

  if (!searchBy || !searchValue) {
    return { error: "Please provide search criteria and value." };
  }

  // Construct query based on search criteria
  // We use variables to avoid template literal injection and handle types correctly
  let query;
  let variables: any = { value: searchValue };

  if (searchBy === "tcNumber") {
    query = gql`
      query GetTC($value: String!) {
        transferCertificates(where: { tcNumber: $value }) {
          id
          tcNumber
          studentName
          admissionNumber
          fatherName
          studentClass
          issueDate
          dob
          verificationStatus
        }
      }
    `;
  } else if (searchBy === "studentName") {
    query = gql`
      query GetTC($value: String!) {
        transferCertificates(where: { studentName_contains: $value }) {
          id
          tcNumber
          studentName
          admissionNumber
          fatherName
          studentClass
          issueDate
          dob
          verificationStatus
        }
      }
    `;
  } else if (searchBy === "admissionNumber") {
    query = gql`
      query GetTC($value: String!) {
        transferCertificates(where: { admissionNumber: $value }) {
          id
          tcNumber
          studentName
          admissionNumber
          fatherName
          studentClass
          issueDate
          dob
          verificationStatus
        }
      }
    `;
  } else if (searchBy === "dob") {
    query = gql`
      query GetTC($value: String!) {
        transferCertificates(where: { dob: $value }) {
          id
          tcNumber
          studentName
          admissionNumber
          fatherName
          studentClass
          issueDate
          dob
          verificationStatus
        }
      }
    `;
  } else {
    return { error: "Invalid search criteria." };
  }

  try {
    const response = (await server_query_function(query, variables)) as TCResponse;
    const certificates = response?.transferCertificates || [];

    if (certificates.length === 0) {
      return { error: "No Transfer Certificate found with the provided information. Please check your details and try again." };
    }

    // Return the first match
    return { data: certificates[0] };
  } catch (err: any) {
    console.error("TC Verification Error:", err);
    return { error: "Could not connect to verification server. Please ensure you are connected to the internet or try again later." };
  }
}
