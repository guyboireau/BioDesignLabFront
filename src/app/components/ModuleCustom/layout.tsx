"use client";
import React,{useState}  from 'react';
import Modal from 'react-modal';
import Carrousel from './carrousel/page';

import './layout.css';
import Image from 'next/image';

interface Image {
    src: string;
    alt: string;
}

const Layout: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<Image[]>([]);

    const handleSubmit = () => {
        const activeSlides = document.getElementsByClassName('slide active');
        const images: Image[] = [];
        for (let i = 0; i < activeSlides.length; i++) {
            if (activeSlides[i] instanceof HTMLElement) {
                const image = activeSlides[i].children[0] as HTMLImageElement;
                images.push({ src: image.src, alt: image.alt });
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
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
                <button onClick={closeModal}>Fermer</button>
                <h1>Vous avez choisi les images suivantes :</h1>
                <div className="modal-content">
                    <div className="modal-content-carrousel">
                        {selectedImages.map((image, index) => (
                            <div key={index}>
                                <Image src={image.src} alt={image.alt} />
                                <p>{image.alt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Layout;
