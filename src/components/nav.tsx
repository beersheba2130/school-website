"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const path = usePathname();

  return (
    <ul className=" hidden lg:flex justify-between items-center gap-5 text-primary ">
      <Link href={"/"}>
        <li
          className={cn(
            "hover:text-secondary",
            path === "/" ? "underline underline-offset-4" : ""
          )}
        >
          Home
        </li>
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
  );
};

export default Nav;
