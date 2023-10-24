import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Technologies = () => {
  const [reactImageURL, setReactImageURL] = useState(null);
  const [tailwindImageURL, setTailwindImageURL] = useState(null);
  const [nodejsImageURL, setNodejsImageURL] = useState(null);
  const [javascriptImageURL, setJavascriptImageURL] = useState(null);
  const [htmlImageURL, setHtmlImageURL] = useState(null);
  const [githubImageURL, setGithubImageURL] = useState(null);
  const [figmaImageURL, setFigmaImageURL] = useState(null);

  useEffect(() => {
    const storage = getStorage();

    // Fetch the React image from Firebase Storage
    const reactImageRef = ref(storage, 'images/React.png');
    getDownloadURL(reactImageRef)
      .then((url) => {
        setReactImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the React image:', error);
      });

    // Fetch the Tailwind image from Firebase Storage
    const tailwindImageRef = ref(storage, 'images/Tailwindcss.png');
    getDownloadURL(tailwindImageRef)
      .then((url) => {
        setTailwindImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the Tailwind image:', error);
      });

    // Fetch the Node.js image from Firebase Storage
    const nodejsImageRef = ref(storage, 'images/Nodejs.png');
    getDownloadURL(nodejsImageRef)
      .then((url) => {
        setNodejsImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the Node.js image:', error);
      });

    // Fetch the Javascript image from Firebase Storage
    const javascriptImageRef = ref(storage, 'images/Javascript.png');
    getDownloadURL(javascriptImageRef)
      .then((url) => {
        setJavascriptImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the Javascript image:', error);
      });

    // Fetch the HTML image from Firebase Storage
    const htmlImageRef = ref(storage, 'images/HTML5.png');
    getDownloadURL(htmlImageRef)
      .then((url) => {
        setHtmlImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the HTML image:', error);
      });

    // Fetch the GitHub image from Firebase Storage
    const githubImageRef = ref(storage, 'images/Github.png');
    getDownloadURL(githubImageRef)
      .then((url) => {
        setGithubImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the GitHub image:', error);
      });

    // Fetch the Figma image from Firebase Storage
    const figmaImageRef = ref(storage, 'images/Figma.png');
    getDownloadURL(figmaImageRef)
      .then((url) => {
        setFigmaImageURL(url);
      })
      .catch((error) => {
        console.error('Error getting download URL for the Figma image:', error);
      });
  }, []);

  return (
    <div id='technologies' className='flex flex-col items-center text-center border-b border-purple pb-8 -mt-32 pt-32'>
      <p className='mt-8 mb-12 ml-0 mr-0 bg-darkpurple text-purple text-2xl pt-2 pb-2 pl-4 pr-4 rounded-xl uppercase font-bold'>🧑‍💻 Technologies</p>
      <p className='text-white opacity-50 text-2xl mb-2'>Technologies I use everyday</p>
      <div className='flex justify-center gap-4'>
        <img className='w-[8%] h-[8%]' src={reactImageURL} alt="React" />
        <img className='w-[8%] h-[8%]' src={tailwindImageURL} alt="Tailwind" />
        <img className='w-[8%] h-[8%]' src={nodejsImageURL} alt="Nodejs" />
        <img className='w-[8%] h-[8%]' src={javascriptImageURL} alt="Javascript" />
        <img className='w-[8%] h-[8%]' src={htmlImageURL} alt="HTML" />
        <img className='w-[8%] h-[8%]' src={githubImageURL} alt="Github" />
        <img className='w-[8%] h-[8%]' src={figmaImageURL} alt="Figma" />
      </div>
    </div>
  );
}

export default Technologies;
