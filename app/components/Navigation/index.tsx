import Link from "next/link";
import React from "react";

export function Navigation() {
  return (
    <header>
      <nav className="px-[150px] py-[30px]">
        <ul className="flex items-center gap-x-[75px]">
          <li>
            <Link href={"/"} className="text-[18px]">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#"} className="text-[18px]">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#"} className="text-[18px]">
              Resume
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#"} className="text-[18px]">
              Projects
            </Link>
          </li>
          <li>
            {" "}
            <Link href={"#"} className="text-[18px]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
