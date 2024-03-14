import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import headerLogo from '../../../../images/logo.svg';

const Logo = () => {
  const [width, setWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };  

  const changeNavButton = useCallback(() => {
    if (window.scrollY >= 400 && width < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    window.addEventListener("scroll", changeNavButton);
    updateWidth();
    changeNavButton();

    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", changeNavButton);
    };
  }, [width, changeNavButton]);

  return (
    <Link href="/" style={{ display: showButton ? "none" : "block" }}>
      <Image src={headerLogo} alt="BioDesign Lab Logo"/>
    </Link>
  );  
};

export default Logo;
