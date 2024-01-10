import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import exp from "constants";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0 bg-dark-purple">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">$
          <div className="flex justify-start items-center h-full">
            <Logo />
          </div>
            <ul className="hidden md:flex gap-x-6 text-white ">

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