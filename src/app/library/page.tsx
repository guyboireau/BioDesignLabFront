'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react';

const articles = [
  { type: 'div', id: 1 },
  { type: 'image', id: 2, title: 'article 1', imageUrl: '/images/Altja_jõgi_Lahemaal.jpg'},
  { type: 'image', id: 3, title: 'article 2', imageUrl: '/images/Campagne-1.jpg'},
  { type: 'image', id: 4, title: 'article 3', imageUrl: '/images/nature-3294681_1920.jpg'},
  { type: 'image', id: 5, title: 'article 4', imageUrl: '/images/nature-efficacite.jpg'},
  { type: 'image', id: 6, title: 'article 5', imageUrl: '/images/thumb_Cascade_gouille_salin-Tignes.jpeg'},
  { type: 'image', id: 7, title: 'article 6', imageUrl: '/images/64f72f0d2a0649916969202400bc89b7.jpg'},
  { type: 'image', id: 8, title: 'article 7', imageUrl: '/images/Altja_jõgi_Lahemaal.jpg'},
  { type: 'image', id: 9, title: 'article 8', imageUrl: '/images/Campagne-1.jpg'},
  { type: 'image', id: 10, title: 'article 9', imageUrl: '/images/nature-3294681_1920.jpg'},
  { type: 'image', id: 11, title: 'article 10', imageUrl: '/images/nature-efficacite.jpg'},
  { type: 'image', id: 12, title: 'article 11', imageUrl: '/images/thumb_Cascade_gouille_salin-Tignes.jpeg'},
  { type: 'image', id: 13, title: 'article 12', imageUrl: '/images/64f72f0d2a0649916969202400bc89b7.jpg'},
  { type: 'image', id: 14, title: 'article 13', imageUrl: '/images/Altja_jõgi_Lahemaal.jpg'},
  { type: 'image', id: 15, title: 'article 14', imageUrl: '/images/Campagne-1.jpg'},
  { type: 'image', id: 16, title: 'article 15', imageUrl: '/images/nature-3294681_1920.jpg'},
  { type: 'image', id: 17, title: 'article 16', imageUrl: '/images/nature-efficacite.jpg'},
  { type: 'image', id: 18, title: 'article 17', imageUrl: '/images/thumb_Cascade_gouille_salin-Tignes.jpeg'},
];

interface MosaicItemData {
  type: string;
  id: number;
  title?: string;
  imageUrl?: string;
}

const Subtitle = () => {
  return (
    <h2 className='text-[#E5EBF0] text-[3rem] font-semibold'>Les fonctions du vivant</h2>
  );
}

const SearchBar = () => {
  return (
    <div className='flex flex-row gap-6'>
      <button className='px-8 py-2 text-base rounded-3xl bg-blue-950 text-[#E5EBF0] text-[13px] md:flex-grow lg:flex-grow-0'>Filtrer</button>
      <input
        className='px-4 py-2 rounded-3xl bg-[#140821] text-opacity-50 text-[#E5EBF0] text-[13px] border border-slate-200 border-opacity-50 min-w-[1rem] flex-grow'
        type='text'
        placeholder='Rechercher'
      />
    </div>
  );
}

const SearchSection = () => {
  return (
    <section className='flex flex-col gap-6'>
      <Subtitle />
      <SearchBar />
    </section>
  );
}

const renderArticles = (articles: MosaicItemData[]): React.ReactNode[] => {
  return articles.map((data, index) => {
    if (data.type === 'div') {
      return <SearchSection key={index} />;
    } else if (data.type === 'image') {
      return (
        <div className='group relative' key={index}>
          <Image
            className='group-hover:opacity-0 transition duration-300'
            src={data.imageUrl || ''}
            width={1}
            height={1}
            alt={data.title || ''}
            title={data.title}
            layout="responsive"
            objectFit="cover"
            loading='lazy'
          />
          <div className="absolute group-hover:opacity-0 transition duration-300 inset-x-0 bottom-12 flex justify-center items-center text-2xl text-white font-semibold p-4 w-full">
            <p className="text-center">{data.title}</p>
          </div>
        </div>
      );
    }
    return null;
  });
};

const MosaicLayout = () => {
  
  const getScreenSize = () => {
    const width = window.innerWidth;

    if (width <= 767) {
      return 'small';
    } else if (width <= 991) {
      return 'medium';
    } else if (width <= 1199) {
      return 'large';
    } else {
      return 'extra-large';
    }
  };

  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderColumns = () => {
    if (screenSize == 'small') {
      return (
        <div className="flex flex-col p-4 w-full gap-8">
          {renderArticles(articles)}
        </div>
      );
    } else if (screenSize == 'medium' || screenSize == 'large') {
      const articlesFirstColumn = articles.filter((value, index) => index % 2 === 0);
      const articlesSecondColumn = articles.filter((value, index) => index % 2 === 1);
      return (
          <div className="flex flex-wrap">
            <div className="flex flex-col p-4 w-1/2 gap-8">
              {renderArticles(articlesFirstColumn)}
            </div>
            <div className="flex flex-col p-4 w-1/2 gap-8">
              {renderArticles(articlesSecondColumn)}
            </div>
          </div>
      );
    } else {
      const articlesFirstColumn = articles.filter((value, index) => index % 3 === 0);
      const articlesSecondColumn = articles.filter((value, index) => index % 3 === 1);
      const articlesThirdColumn = articles.filter((value, index) => index % 3 === 2);
      return (
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-wrap">
            <div className="flex flex-col p-4 w-full md:w-1/2 lg:w-1/4 lg:pr-4 lg:pl-32 lg:py-4 lg:flex-grow gap-8">
              {renderArticles(articlesFirstColumn)}
            </div>
            <div className="flex flex-col p-4 w-full md:w-1/2 lg:w-1/5 gap-8">
              {renderArticles(articlesSecondColumn)}
            </div>
            <div className="flex flex-col p-4 w-full md:w-1/2 lg:w-1/4 lg:pl-4 lg:pr-32 lg:py-4 lg:flex-grow gap-8">
              {renderArticles(articlesThirdColumn)}
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      {renderColumns()}
    </div>
  );
}

export default function Library() {
  return (
    <>
      <main className='bg-[#140821]'>
        <MosaicLayout/>
      </main>
    </>
  )
}