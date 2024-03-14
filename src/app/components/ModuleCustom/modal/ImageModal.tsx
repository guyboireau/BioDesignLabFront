import React from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageModalProps {
  children: { image: string; alt: string; name: string }[]; 

  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-body">
          {children.map((child, index) => (
            <div key={index}>
              {child.image && <Image src={child.image} alt={child.alt} />}
              <p>{child.name}</p>
              {/* Ajoutez d'autres informations d'enfant si nécessaire */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
