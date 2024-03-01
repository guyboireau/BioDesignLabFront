"use client";
import React, { useEffect, useState } from 'react';
import './layout.css';
import Image, { ImageProps } from 'next/image';
import ImageGrid from '@/components/ImageGrid';
import CATEGORIES_QUERY from "@/graphql/queries/getCategories";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import LoadingBar from '../progressbar';
interface Image {
    src: string;
    alt: string;
}

const Layout: React.FC = () => {
    const { loading, error, data, fetchMore } = useQuery(CATEGORIES_QUERY, {
        variables: { first: 8 },
    });
    const [selectedImages, setSelectedImages] = useState<ImageProps[]>([]);
    const [progress, setProgress] = useState(0);

    const handleSubmit = () => {
        const images: Image[] = [];
        for (const image of selectedImages) {
            if (image.src) {
                const { src, alt } = image as ImageProps; 
                images.push({ src, alt });
            }
        }
        // setSelectedImages(images);
        setProgress(progress + 1)
        console.log(data);

    };

    const handleImagesSelected = (image: ImageProps) => {
        if (selectedImages.find((img) => img.src === image.src)) {
            setSelectedImages((prevImages) => prevImages.filter((img) => img.src !== image.src));
        } else if (selectedImages.length < 3) {
            setSelectedImages((prevImages) => [...prevImages, image]);
        } else {
            alert('Vous ne pouvez sélectionner que 3 images.');
        }
    };


    const images: ImageProps[] = data?.categories?.edges?.map((edge) => {
        const metadata = JSON.parse(edge.node.description ?? '{}');
        return {
            src: metadata?.image,
            alt: edge.node.name ?? '',
        };
    }) ?? [];


    return (
        <>
            <LoadingBar progress={progress} />            
            <h2>Crée un outil biomimétique</h2>
            <div className="flex pb-8 m-5" >
                <div className="flex-wrap mr-8 w-1/4">
                    {selectedImages.map((image, index) => (
                        <div className="flex-wrap" key={index} >
                            <Image src={image.src} alt={image.alt} width={200} height={200} className=''></Image>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-around bg-royal-blue rounded-lg" >
                    <div className="w-1/2 mx-2 h-1/3 box-border ">
                        <h3>Choisis les fonctions que tu souhaites donner à ton objet</h3>
                        <ImageGrid images={images ?? []} onImageSelect={handleImagesSelected} />
                        <div className="flex justify-center items-center " >
                            <button className="bg-green-400 text-white py-4 px-8 text-center no-underline font-normal text-lg mx-1 my-2 cursor-pointer transition-all duration-200 rounded-lg hover:bg-green-500" onClick={handleSubmit}>Valider la configuration</button>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default Layout;
