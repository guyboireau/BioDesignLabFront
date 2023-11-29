"use client";
import { useState } from 'react';
import slide1 from '../../../../images/Slide1.png';
import slide2 from '../../../../images/Slide2.png';
import slide3 from '../../../../images/Slide3.png';
import slide4 from '../../../../images/Slide4.png';
import suivant from '../../../../images/suivant.png'
import precedent from '../../../../images/precedent.png';
import Image from 'next/image';

import './carrousel.css'; // Assurez-vous de créer ce fichier CSS et de l'importer ici

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: slide1, alt: 'Description de la slide 1' },
    { src: slide2, alt: 'Description de la slide 2' },
    { src: slide3, alt: 'Description de la slide 3' },
    { src: slide4, alt: 'Description de la slide 4' }
  ];



  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPreviousSlide}><Image src={precedent}
        alt="Logo"
        width={32 ? 32 : 32}
        height={32 ? 32 : 32}
        className="relative" /></button>
      <div className="slides">
        {slides.map((slide, index) => (
          <div className={`slide ${currentSlide === index ? 'active' : ''}`} key={index}>
            <Image src={slide.src}
              alt={slide.alt}  // Assurez-vous que chaque image ait un attribut alt 
              width={128 ? 128 : 128}
              height={128 ? 128 : 128}
              className="relative" ></Image>
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}><Image src={suivant}
        alt="Logo"
        width={32 ? 32 : 32}
        height={32 ? 32 : 32}
        className="relative" /></button>

    </div>
  );
};

export default Carrousel;