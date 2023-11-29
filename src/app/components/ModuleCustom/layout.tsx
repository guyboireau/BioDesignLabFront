"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import Carrousel from './carrousel/page';

import './layout.css';

const Layout: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleSubmit = () => {
    const activeSlides = document.getElementsByClassName('slide active');
    const images: string[] = [];

    for (let i = 0; i < activeSlides.length; i++) {
      if (activeSlides[i] instanceof HTMLElement) {
        const image = activeSlides[i].children[0] as HTMLImageElement;
        images.push(image.src);
      }
    }

    setSelectedImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Carrousel></Carrousel>
      <Carrousel></Carrousel>
      <Carrousel></Carrousel>
      <div className="btn">
        <button className="button-style" onClick={handleSubmit}>Valider la configuration</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Fermer</button>
        <div className="modal-content">
          <h1>Voici votre configuration</h1>
          <div className="modal-content-carrousel">
            Vous avez choisi les images suivantes :
            {selectedImages.map((src, index) => (
              <img key={index} src={src} alt={`Image sélectionnée ${index + 1}`} />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;