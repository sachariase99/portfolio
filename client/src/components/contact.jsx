import React, { useState } from 'react';
import { BiCopy } from 'react-icons/bi';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = 'Sachariase99@hotmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        console.log('Email copied to clipboard:', email);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000); // Hide the notification after 1 second
      })
      .catch((error) => {
        console.error('Failed to copy email:', error);
      });
  };

  return (
    <div id='contact' className='-mt-32 pt-32'>
      <div className='flex flex-col items-center'>
        <p className='mt-8 mb-12 ml-0 mr-0 bg-darkpurple text-purple text-2xl pt-2 pb-2 pl-4 pr-4 rounded-xl uppercase font-bold'>📬 contact me</p>
        <p className='text-white'>Let's have a conversation!</p>
        <p className='mt-8 mb-1 ml-0 mr-0 bg-darkpurple text-purple text-xl pt-2 pb-2 pl-4 pr-4 rounded-xl font-bold'>
          <button onClick={copyEmailToClipboard}><BiCopy /></button> Sachariase99@hotmail.com
        </p>
        {isCopied && (
          <div className="bg-darkpurple text-white py-2 px-4 rounded-xl">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
