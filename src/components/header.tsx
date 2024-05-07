import { poppins } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./mobile-nav";

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

      <ul className=" hidden lg:flex justify-between items-center gap-5 text-primary ">
        <Link href={"/"}>
          <li className="hover:text-secondary">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="hover:text-secondary">About</li>
        </Link>
        <Link href={"/message"}>
          <li className="hover:text-secondary">Message</li>
        </Link>
        <Link href={"/academic"}>
          <li className="hover:text-secondary">Academic</li>
        </Link>
        <Link href={"/facility"}>
          <li className="hover:text-secondary">Facility</li>
        </Link>
        <Link href={"/gallery"}>
          <li className="hover:text-secondary">Gallary</li>
        </Link>
        <Link href={"/contact-us"}>
          <li className="hover:text-secondary">Conatct us</li>
        </Link>
        <Link href={"/disclosure"}>
          <li className="hover:text-secondary">Disclosure</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
