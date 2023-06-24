import React, { useState } from 'react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`text-white flex justify-end relative ${isOpen ? 'z-50' : ''}`}>
            <button className={`m-3 ${isOpen ? '' : ''}`} onClick={toggleMenu}>
                <span className={`block w-7 h-1 bg-white mb-1 transform transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`}></span>
                <span className={`block w-6 h-1 bg-white ml-1 transform transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-7 h-1 bg-white mt-1 transform transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`}></span>
            </button>
            {isOpen && (
                <div className={`fixed bg-darkpurple -mr-3 mt-[3.5rem] rounded-xl overflow-hidden ${isOpen ? 'z-50  open-menu' : ''}`}>
                    <ul className='flex flex-col text-end p-4'>
                        <li><a className='text-white uppercase font-bold text-[2rem] hover:text-[#7B4AE2] transition-all duration-300' href="#header">Home</a></li>
                        <li><a className='text-white uppercase font-bold text-[2rem] hover:text-[#7B4AE2] transition-all duration-300' href="#about">About me</a></li>
                        <li><a className='text-white uppercase font-bold text-[2rem] hover:text-[#7B4AE2] transition-all duration-300' href="#technologies">Technologies</a></li>
                        <li><a className='text-white uppercase font-bold text-[2rem] hover:text-[#7B4AE2] transition-all duration-300' href="#portfolio">Portfolio</a></li>
                        <li><a className='text-white uppercase font-bold text-[2rem] hover:text-[#7B4AE2] transition-all duration-300' href="#contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
