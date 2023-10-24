import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import Navbar from './navbar';
import { PiPaperPlaneTiltLight } from 'react-icons/pi';

const Header = () => {
  const [figmaURL, setFigmaURL] = useState(null);
  const [tailwindURL, setTailwindURL] = useState(null);
  const [reactURL, setReactURL] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);

  useEffect(() => {
    // Fetch images from Firebase Storage
    const storage = getStorage();

    const figmaRef = ref(storage, 'images/Figma.png');
    getDownloadURL(figmaRef)
      .then((url) => {
        setFigmaURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for Figma logo:', error);
      });

    const tailwindRef = ref(storage, 'images/Tailwindcss.png');
    getDownloadURL(tailwindRef)
      .then((url) => {
        setTailwindURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for Tailwind CSS logo:', error);
      });

    const reactRef = ref(storage, 'images/React.png');
    getDownloadURL(reactRef)
      .then((url) => {
        setReactURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for React logo:', error);
      });

    const avatarRef = ref(storage, 'images/Avatar.png');
    getDownloadURL(avatarRef)
      .then((url) => {
        setAvatarURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the avatar:', error);
      });
  }, []);

  return (
    <div className='border-b border-purple'>
      <div className='pl-4 pr-4 pb-8 relative' id='header'>
        <div>
          <Navbar />
        </div>
        <div className='grid md:grid-cols-3 items-center pt-[9rem] pb-4'>
          <h1 className='text-white font-extrabold text-[2.4rem] leading-tight pb-4 md:pb-0 text-center md:text-left'><span className='text-purple'>J</span>annick<span className='text-purple'> S</span>achariasen</h1>
          <div className='relative w-[70%] m-auto md:w-[100%]'>
            <img className='absolute -translate-x-1/2 -translate-y-1/2 top-[23%] left-[21%] bg-darkpurple rounded-full p-3 z-10 opacity-50 w-[15%]' src={figmaURL} alt="Figma Logo" />
            <img className='absolute -translate-x-1/2 -translate-y-1/2 bottom-[14%] left-[14%] bg-darkpurple rounded-full p-3 z-10 opacity-50 w-[15%]' src={tailwindURL} alt="Tailwindcss Logo" />
            <img className='absolute -translate-x-1/2 -translate-y-1/2 bottom-[26%] right-[-4%] bg-darkpurple rounded-full p-3 z-10 opacity-50 w-[15%]' src={reactURL} alt="React Logo" />
            <img className='opacity-90 w-[100%]' src={avatarURL} alt="Avatar" /> {/* Display the avatar image from Firebase */}
          </div>
          <div className='text-purple opacity-50 flex justify-center md:justify-end items-center pt-4 md:absolute md:bottom-12 md:right-8'>
            <a href="#contact" className='z-0 flex items-center cursor-pointer'>
              <p className='font-bold text-[2rem] bg-transparent'><PiPaperPlaneTiltLight /></p><p className='font-bold text-[1.4vw]'>Let's Talk</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;