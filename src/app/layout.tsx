import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { latto, poppins } from "@/utils/font";
import TopHeader from "@/components/top-header";
import Marque from "@/components/marque";
import Footer from "@/components/footer";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "BeerSheba School",
  description: "School in Hladwani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latto.className} bg-white overflow-x-hidden`}>
        <TopHeader />
        <Header />
        <Marque />
        {children}
        <Footer />
        <div className="p-5">
          <p className={`${poppins.className} text-center font-medium`}>
            @Copyright 2023 All Rights Reserved
          </p>
          <p className={`${poppins.className} text-center font-medium`}>
            <Link href={"https://preettech.com/"}>
              @ Developed by Preet Tech
            </Link>
          </p>
        </div>
      </body>
    </html>
  );
}
