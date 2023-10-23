import React from 'react';
import { logo } from '../images';
import BurgerMenu from './burgermenu';

const Navbar = () => {
    return (
        <nav className='fixed top-8 left-[5vw] right-[5vw] rounded-xl z-50 bg-darkpurple'>
            <div className='flex justify-between items-center p-3'>
                <a href="#header">
                    <img className='max-w-[50px]' src={logo} alt='Logo' />
                </a>
                <div className='z-10'>
                    <BurgerMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;