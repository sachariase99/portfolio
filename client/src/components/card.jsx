import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Card = () => {
  const [codeImageURL, setCodeImageURL] = useState(null);
  const [projectImageURL, setProjectImageURL] = useState(null);
  const [designImageURL, setDesignImageURL] = useState(null);

  useEffect(() => {
    const storage = getStorage();

    const codeImageRef = ref(storage, 'images/CodeIcon.svg');
    getDownloadURL(codeImageRef)
      .then((url) => {
        setCodeImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the code image:', error);
      });

    const projectImageRef = ref(storage, 'images/ProjectsIcon.svg');
    getDownloadURL(projectImageRef)
      .then((url) => {
        setProjectImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the project image:', error);
      });

    const designImageRef = ref(storage, 'images/DesignIcon.svg');
    getDownloadURL(designImageRef)
      .then((url) => {
        setDesignImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the design image:', error);
      });
  }, []);

  return (
    <div className='border-b border-purple pb-8'>
      {/* CARDS */}
      <div className='text-white grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-8 md:gap-x-8 xl:gap-0 text-center justify-center mt-8'>
        <div className='m-auto w-[250px] h-[250px] relative border-2 border-lightpurple rounded-3xl bg-purplehover duration-500'>
          <img className='w-[50%] h-[50%] m-auto' src={codeImageURL} alt="Code" />
          <div className='absolute left-1/2 bottom-4 -translate-x-1/2'>
            <p className='text-white font-light text-lg'>Nine years of</p>
            <p className='text-white font-bold text-3xl'>experience</p>
          </div>
        </div>
        <div className='m-auto w-[250px] h-[250px] relative border-2 border-lightpurple rounded-3xl bg-purplehover duration-500'>
          <img className='w-[50%] h-[50%] m-auto' src={projectImageURL} alt="Project" />
          <div className='absolute left-1/2 bottom-4 -translate-x-1/2'>
            <p className='text-white font-light text-lg'>23 completed</p>
            <p className='text-white font-bold text-3xl'>Projects</p>
          </div>
        </div>
        <div className='m-auto w-[250px] h-[250px] relative border-2 border-lightpurple rounded-3xl bg-purplehover duration-500 md:col-span-2 xl:col-span-1'>
          <img className='w-[50%] h-[50%] m-auto' src={designImageURL} alt="Design" />
          <div className='absolute left-1/2 bottom-4 -translate-x-1/2'>
            <p className='text-white font-light text-lg'>15+ happy</p>
            <p className='text-white font-bold text-3xl'>Customers</p>
          </div>
        </div>
      </div>
      {/* UNDER THE CARDS */}
      <CardDescription />
    </div>
  );
}

export default Card;
