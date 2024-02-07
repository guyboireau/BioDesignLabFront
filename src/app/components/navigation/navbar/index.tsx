import React from "react";
import Logo from "./Logo";
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
                <Menu title="Créer" link="/generator"/>
              </li>
              <li>
                <Menu title="S'inspirer" link="/library"/>
              </li>
              <li>
                <Menu title="Découvrir" link="/functions"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;