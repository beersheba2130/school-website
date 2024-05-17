import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"}>
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav>
            <ul className="pt-10">
              <Link href={"/"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  Home
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  About
                </li>
              </Link>
              <Link href={"/message"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  Message
                </li>
              </Link>
              <Link href={"/academics"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  Academics
                </li>
              </Link>
              <Link href={"/facility"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  Facility
                </li>
              </Link>
              <Link href={"/gallery"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  Gallary
                </li>
              </Link>
              <Link href={"/contact-us"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  Conatct us
                </li>
              </Link>
              <Link href={"/disclosure"}>
                <li className="hover:text-secondary py-2 text-base font-medium">
                  Disclosure
                </li>
              </Link>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
