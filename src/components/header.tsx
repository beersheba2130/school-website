import { poppins } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./mobile-nav";
import Nav from "./nav";

const Header = () => {
  return (
    <header
      className={`${poppins.className}  mx-auto px-3 lg:px-10 py-1 flex justify-between items-center font-medium`}
    >
      <Link href={"/"}>
        <Image
          src={"/assets/image/logo.jpg"}
          alt="logo"
          width={500}
          height={500}
          className="lg:w-80 w-60 "
        />
      </Link>

      <MobileNav />

      <Nav />
    </header>
  );
};

export default Header;
