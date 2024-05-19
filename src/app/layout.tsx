import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { latto, poppins } from "@/utils/font";
import TopHeader from "@/components/top-header";
import Marque from "@/components/marque";
import Footer from "@/components/footer";

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
      <body className={`${latto.className} bg-white`}>
        <TopHeader />
        <Header />
        <Marque />
        {children}
        <Footer />
        <div className="p-5">
          <p className={`${poppins.className} text-center font-medium`}>
            © 2024 Beersheba School | All Rights Reserved
          </p>
        </div>
      </body>
    </html>
  );
}
