import React, { useState } from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageProps[];
  onImageSelect: (images: ImageProps) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageSelect }) => {
  const handleImagesSelected = (image: ImageProps) => {
    onImageSelect(image); // Fix: Pass a single ImageProps object instead of an array
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images && images.map((image, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <Image src={image.src} alt={image.alt} width={200} height={200} onClick={() => handleImagesSelected(image)} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;