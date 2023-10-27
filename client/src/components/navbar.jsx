import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Navbar = () => {
  const [logoURL, setLogoURL] = useState(null);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage);
    const logoRef = ref(storage, 'images/Logo.png');

    getDownloadURL(logoRef)
      .then((url) => {
        setLogoURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the logo:', error);
      });
  }, []);

  return (
    <nav className='fixed top-8 left-[5vw] right-[5vw] rounded-xl z-50 bg-darkpurple'>
      <div className='flex justify-between items-center p-3'>
        <a href="#header">
          {logoURL && (
            <img className='max-w-[50px]' src={logoURL} alt='Logo' />
          )}
        </a>
        <div className='z-10'>
          {/* Your BurgerMenu component */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;