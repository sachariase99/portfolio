import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const PortfolioCards = () => {
  const [cucodeImageURL, setCucodeImageURL] = useState(null);
  const [tshopImageURL, setTshopImageURL] = useState(null);
  const [spicyImageURL, setSpicyImageURL] = useState(null);
  const [globalGoalsImageURL, setGlobalGoalsImageURL] = useState(null);
  const [gptImageURL, setGptImageURL] = useState(null);

  useEffect(() => {
    const storage = getStorage();

    const cucodeImageRef = ref(storage, 'images/cucode.webp');
    getDownloadURL(cucodeImageRef)
      .then((url) => {
        setCucodeImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the CuCode image:', error);
      });

    const tshopImageRef = ref(storage, 'images/t-shop.webp');
    getDownloadURL(tshopImageRef)
      .then((url) => {
        setTshopImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the T-Shop image:', error);
      });

    const spicyImageRef = ref(storage, 'images/spicy.webp');
    getDownloadURL(spicyImageRef)
      .then((url) => {
        setSpicyImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the Spicy image:', error);
      });

    const globalGoalsImageRef = ref(storage, 'images/globalgoals.webp');
    getDownloadURL(globalGoalsImageRef)
      .then((url) => {
        setGlobalGoalsImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the Global Goals image:', error);
      });

    const gptImageRef = ref(storage, 'images/GPT-3.jpg');
    getDownloadURL(gptImageRef)
      .then((url) => {
        setGptImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the GPT image:', error);
      });
  }, []);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mt-8'>
        <a href="http://cucode.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
          <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
            <p className='text-white mt-4 font-bold text-xl'>CuCode</p>
            <img className='p-4' src={cucodeImageURL} alt="CuCode" />
          </div>
        </a>
        <a href="http://t-shop.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
          <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
            <p className='text-white mt-4 font-bold text-xl'>T-Shop</p>
            <img className='p-4' src={tshopImageURL} alt="T-Shop" />
          </div>
        </a>
        <a href="http://spicy.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
          <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
            <p className='text-white mt-4 font-bold text-xl'>Spicy</p>
            <img className='p-4' src={spicyImageURL} alt="Spicy" />
          </div>
        </a>
        <a href="http://global-goals.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
          <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
            <p className='text-white mt-4 font-bold text-xl'>Global Goals</p>
            <img className='p-4' src={globalGoalsImageURL} alt="Global Goals" />
          </div>
        </a>
        <a href="http://gpt-3.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
          <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
            <p className='text-white mt-4 font-bold text-xl'>GPT</p>
            <img className='p-4' src={gptImageURL} alt="GPT-3" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default PortfolioCards;
