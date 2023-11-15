"use client";
import React,{ useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar/index";  


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar  />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;