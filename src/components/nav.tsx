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
        <li
          className={cn(
            "hover:text-secondary",
            path === "/about" ? "underline underline-offset-4" : ""
          )}
        >
          About
        </li>
      </Link>
      <Link href={"/message"}>
        <li
          className={cn(
            "hover:text-secondary",
            path === "/message" ? "underline underline-offset-4" : ""
          )}
        >
          Message
        </li>
      </Link>
      <Link href={"/academics"}>
        <li
          className={cn(
            "hover:text-secondary",
            path === "/academics" ? "underline underline-offset-4" : ""
          )}
        >
          Academic
        </li>
      </Link>
      <Link href={"/facility"}>
        <li
          className={cn(
            "hover:text-secondary",
            path === "/facility" ? "underline underline-offset-4" : ""
          )}
        >
          Facility
        </li>
      </Link>
      <Link href={"/gallery"}>
        <li
          className={cn(
            "hover:text-secondary",
            path === "/gallery" ? "underline underline-offset-4" : ""
          )}
        >
          Gallary
        </li>
      </Link>
      <Link href={"/contact-us"}>
        <li
          className={cn(
            "hover:text-secondary",
            path === "/contact-us" ? "underline underline-offset-4" : ""
          )}
        >
          Conatct us
        </li>
      </Link>
      <Link href={"/disclosure"}>
        <li
          className={cn(
            "hover:text-secondary",
            path === "/disclosure" ? "underline underline-offset-4" : ""
          )}
        >
          Disclosure
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
