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


let checkboxes = [
  {label: "Construire", checked: false},
  {label: "Thermoréguler", checked: false},
  {label: "Organiser", checked: false},
  {label: "Consolider", checked: false},
  {label: "Agripper", checked: false},
  {label: "Protéger", checked: false},
  {label: "Naviguer", checked: false},
  {label: "Couper", checked: false},
];

const selectedLabels: string[] = [];

interface MosaicItemData {
  type: string;
  id: number;
  title?: string;
  imageUrl?: string;
}

type CheckboxProps = {
  id: string,
  label: string,
  checked: boolean,
}

type FilterLabelProps = {
  label: string;
};

const SvgFilterClose = () => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector" d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#E5EBF0"/>
    </svg>
  );
}

const SvgFilterOpen = () => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector" d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#76E481"/>
    </svg>
  );
}

const ClearAllSelectedLabels = () => {
  selectedLabels.length = 0
  checkboxes = checkboxes.map((checkbox) => ({
    ...checkbox,
    checked: false,
  }));
}

const SvgFilterArrow = () => {
  return (
    <svg width="11" height="11" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ClearAllSelectedLabels}>
      <path id="Vector" d="M0 11.5V10.125H1.89062L1.61563 9.88438C1.01979 9.35729 0.601562 8.75573 0.360938 8.07969C0.120313 7.40365 0 6.72188 0 6.03438C0 4.7625 0.38099 3.63099 1.14297 2.63984C1.90495 1.6487 2.89896 0.992708 4.125 0.671875V2.11563C3.3 2.41354 2.63542 2.92057 2.13125 3.63672C1.62708 4.35286 1.375 5.15208 1.375 6.03438C1.375 6.55 1.4724 7.0513 1.66719 7.53828C1.86198 8.02526 2.16563 8.475 2.57812 8.8875L2.75 9.05937V7.375H4.125V11.5H0ZM6.875 11.3281V9.88438C7.7 9.58646 8.36458 9.07943 8.86875 8.36328C9.37292 7.64714 9.625 6.84792 9.625 5.96563C9.625 5.45 9.5276 4.9487 9.33281 4.46172C9.13802 3.97474 8.83438 3.525 8.42188 3.1125L8.25 2.94062V4.625H6.875V0.5H11V1.875H9.10938L9.38438 2.11563C9.94583 2.67708 10.3555 3.28724 10.6133 3.94609C10.8711 4.60495 11 5.27813 11 5.96563C11 7.2375 10.619 8.36901 9.85703 9.36016C9.09505 10.3513 8.10104 11.0073 6.875 11.3281Z" fill="#76E581"/>
    </svg>
  );
}

const SvgCheckIcon = () => {
  return (
    <svg className='absolute mt-1 ml-1 hidden peer-checked:block pointer-events-none' width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="7" height="5" fill="#949494"/>
      <g id="infos">
      <rect x="-43.5" y="-278.5" width="472" height="610" rx="8.5" fill="white"/>
      <rect x="-43.5" y="-278.5" width="472" height="610" rx="8.5" stroke="#E5EBF0"/>
      <g id="Frame 105">
      <g id="Frame 98">
      <rect x="-22" y="-18" width="217" height="85" rx="12" fill="#E5EBF0"/>
      <g id="Frame 102">
      <g id="Frame 99">
      <g id="Frame 98_2">
      <rect x="-3.5" y="-4.5" width="14" height="14" rx="1.5" fill="#002266"/>
      <rect x="-3.5" y="-4.5" width="14" height="14" rx="1.5" stroke="#002266"/>
      <path id="Vector" d="M2.44785 5L0 2.62994L0.611963 2.03742L2.44785 3.81497L6.38804 0L7 0.592516L2.44785 5Z" fill="#E5EBF0"/>
      </g>
      </g>
      </g>
      </g>
      </g>
      </g>
    </svg>
  );
}

const Subtitle = () => {
  return (
    <h2 className='text-[#E5EBF0] text-[2rem] font-semibold'>Les fonctions du vivant</h2>
  );
}

const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = React.useState(props.checked);

  const handleChange = (selectedLabels: string[]) => {
    setChecked(!checked);
    checkboxes = checkboxes.map(checkbox =>
      checkbox.label === props.label
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    )
    if (!checked) {
      selectedLabels.push(props.label);
      
    } else {
      const index = selectedLabels.indexOf(props.label);
      if (index > -1) {
        selectedLabels.splice(index, 1);
      }
    }
    selectedLabels.sort((a, b) => a.localeCompare(b))
  }

  return (
    <div className='w-1/2 flex items-center justify-between'>
      <input id={props.id} type="checkbox" className='relative peer appearance-none shrink-0 mr-2 w-[0.9375rem] h-[0.9375rem] border border-[#002266] rounded-sm bg-white mt-1 checked:bg-[#002266] checked:border-0' checked={checked} onChange={() => handleChange(selectedLabels)}/>
      <label htmlFor={props.id} className='text-[#002266] text-xs font-normal'>{props.label}</label>
      <SvgCheckIcon/>
    </div>
  );
};

const FilterLabel = ({ label }: FilterLabelProps) => {
  return (
    <div className='px-5 w-auto h-[1.375rem] rounded-[1.3125rem] text-blue-950 bg-[#E5EBF0] flex items-center justify-center text-xs font-light'>{label}</div>
  )
}

const SearchBar = () => {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);

  const FilterButtonClose = () => {
    return (
      <div className='flex flex-col gap-[0.5625rem]'>
        <button 
        className='px-8 py-2 h-8 text-xs rounded-[1.3125rem] bg-blue-950 text-[#E5EBF0] text-[13px] md:flex-grow lg:flex-grow-0 flex gap-[0.375rem] items-center justify-center'
        onClick={() => {
          setFilterMenuOpen(true);
        }}
        >
          <SvgFilterClose/>
          Filtrer
        </button>
      </div>
    );
  }

  const FilterButtonOpen = () => {
    return (
      <div className='flex flex-col gap-[0.375rem] w-1/2'>
        <button 
        className='px-[1.4375rem] py-2 h-8 text-xs rounded-[1.3125rem] bg-blue-950 text-[#76E481] text-[13px] md:flex-grow lg:flex-grow-0 flex gap-[0.375rem] items-center justify-between'
        onClick={() => {
          setFilterMenuOpen(false);
        }}
        >
          <div className='flex justify-between items-center gap-[0.375rem]'>
            <SvgFilterOpen/>
            Filtrer
          </div>
          <SvgFilterArrow/>
        </button>
        <div className='bg-[#E5EBF0] px-[1.125rem] py-[0.8125rem] flex flex-col items-start w-full gap-[0.4375rem] rounded-xl'>
          {checkboxes.sort((a, b) => a.label.localeCompare(b.label)).map((values, index) => (
            <Checkbox key={index} id={"checkbox-"+index.toString()} label={values.label} checked={values.checked}/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-row gap-4'>
        {isFilterMenuOpen ? <FilterButtonOpen/> : <FilterButtonClose/>}
        <input
          className='px-4 py-2 rounded-3xl h-8 bg-[#140821] text-opacity-50 text-[#E5EBF0] text-[13px] border border-slate-200 border-opacity-50 min-w-[1rem] flex-grow outline-none focus:bg-[#E5EBF0] focus: focus:text-[#002266]'
          type='text'
          placeholder='Rechercher'
        />
      </div>
      {selectedLabels.length > 0 && !isFilterMenuOpen &&
        <div className='flex flex-row flex-wrap gap-3'>
          {selectedLabels.map((label, index) =>
            <FilterLabel key={index} label={label}/>
          )}
        </div>
      }
    </>
  );
}

const SearchSection = () => {
  return (
    <section className='flex flex-col gap-3'>
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
        <figure className='group relative w-full' key={index}>
          {/* foreground image */}
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
          {/* background image (appears on hover) */}
          <Image
            className='absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300'
            src={data.imageUrl || ''}
            width={1}
            height={1}
            alt={data.title || ''}
            title={data.title}
            layout="responsive"
            objectFit="cover"
            loading='lazy'
          />
          {/* article title */}
          <figcaption className="absolute group-hover:opacity-0 transition duration-300 text-center inset-x-0 bottom-[10%] flex justify-center items-center text-4xl text-white font-semibold p-5 w-full whitespace-normal break-words">{"Neque porro quisquam est qui dolorem"}</figcaption>
        </figure>
      );
    }
    return null;
  });
};

const MosaicLayout = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
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
    setScreenSize(getScreenSize());
  
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
        <div className="flex flex-col px-4 w-full gap-4">
          {renderArticles(articles)}
        </div>
      );
    } else if (screenSize == 'medium' || screenSize == 'large') {
      const articlesFirstColumn = articles.filter((value, index) => index % 2 === 0);
      const articlesSecondColumn = articles.filter((value, index) => index % 2 === 1);
      return (
          <div className="flex flex-wrap md:px-6 lg:px-8">
            <div className="flex flex-col md:pr-[0.625rem] lg:pr-3 w-1/2 gap-6">
              {renderArticles(articlesFirstColumn)}
            </div>
            <div className="flex flex-col md:pl-[0.625rem] lg:pl-3 w-1/2 gap-6">
              {renderArticles(articlesSecondColumn)}
            </div>
          </div>
      );
    } else {
      const articlesFirstColumn = articles.filter((value, index) => index % 3 === 0);
      const articlesSecondColumn = articles.filter((value, index) => index % 3 === 1);
      const articlesThirdColumn = articles.filter((value, index) => index % 3 === 2);
      return (
        <div className="flex flex-wrap gap-6 px-32">
          <div className="flex flex-col w-1/4 flex-grow-[2] gap-6">
            {renderArticles(articlesFirstColumn)}
          </div>
          <div className="flex flex-col w-1/5 flex-grow gap-6">
            {renderArticles(articlesSecondColumn)}
          </div>
          <div className="flex flex-col w-1/5 flex-grow gap-6">
            {renderArticles(articlesThirdColumn)}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex justify-center items-center h-full py-8 lg:py-16">
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
