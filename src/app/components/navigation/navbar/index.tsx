import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import exp from "constants";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 header">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">

              <li>
                <Link href="/"><p>Home</p></Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/librairy">
                  <p>Librairy</p>
                </Link>
              </li>
              <li>
                <Link href="/generator">
                  <p>Generator</p>
                </Link>
              </li>
              <li>
              <Button />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;