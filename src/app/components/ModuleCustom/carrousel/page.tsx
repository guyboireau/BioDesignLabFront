"use client";
import { useState } from 'react';
import slide1 from '../../../../images/Aggriper.svg';
import slide2 from '../../../../images/Structure.svg';
import slide3 from '../../../../images/Thermorégulation.svg';
import slide4 from '../../../../images/Couper.svg';
import slide5 from '../../../../images/Consolidation.svg';
import slide6 from '../../../../images/Naviger.svg';
import slide7 from '../../../../images/Organisationnel.svg';
import slide8 from '../../../../images/Proteger.svg';
import suivant from '../../../../images/chevron_right_FILL0_wght400_GRAD0_opsz24 (1).svg'
import precedent from '../../../../images/chevron_left_FILL0_wght400_GRAD0_opsz24.svg';
import Image from 'next/image';
import './carrousel.css'; // Assurez-vous de créer ce fichier CSS et de l'importer ici


const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: slide1, alt: 'Description de la slide 1' },
    { src: slide2, alt: 'Description de la slide 2' },
    { src: slide3, alt: 'Description de la slide 3' },
    { src: slide4, alt: 'Description de la slide 4' },
    { src: slide5, alt: 'Description de la slide 5' },
    { src: slide6, alt: 'Description de la slide 6' },
    { src: slide7, alt: 'Description de la slide 7' },
    { src: slide8, alt: 'Description de la slide 8' }
  ];



  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
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
                width={256 ? 256 : 256}
                height={256 ? 256 : 256}
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
    </>

  );
};

export default Carrousel;