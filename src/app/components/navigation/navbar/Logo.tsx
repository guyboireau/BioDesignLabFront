import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  logo  from '../../../../images/logo.png';

const Logo = () => {
  const [width, setWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const changeNavButton = () => {
    if (window.scrollY >= 400 && width < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    window.addEventListener("scroll", changeNavButton);
    updateWidth();
    changeNavButton();

    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", changeNavButton);
    };
  }, [width]);

  return (
    <Link href="/" className="flex justify-start"
      style={{ display: showButton ? "none" : "block" }}>
        <Image
          src={logo}
          alt="Logo"
          width={width < 600 ? 64 : 128}
          height= {width < 600 ? 64 : 128}
          className="relative"
        />
    </Link>
  );
};

export default Logo;