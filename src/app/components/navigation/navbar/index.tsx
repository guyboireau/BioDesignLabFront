import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Menu from "./Menu";


const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-dark-blue sticky top-0 header">
        <div className="container mx-auto px-4 h-full">

          <div className="flex justify-between items-center h-full">
            <Logo />
              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Menu title="About us" link="/about"/>
                </li>
                <li>
                  <Menu title="Library" link="/library"/>
                </li>
                <li>
                  <Menu title="Generator" link="/generator"/>
                </li>
              </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;