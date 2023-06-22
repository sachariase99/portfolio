import React from 'react'
import Navbar from './navbar'
import Avatar from '../images/Jannick.png'
import { PiPaperPlaneTiltLight } from 'react-icons/pi';

const Header = () => {
    return (
        <div className='border-b border-purple'>
            <div className='max-w-[1500px] m-auto pl-4 pr-4 pb-8 ' id='header'>
                <div>
                    <Navbar />
                </div>
                <div className='grid md:grid-cols-3 items-center pt-[9rem] pb-8'>
                    <h1 className='text-white font-extrabold text-[4vw] leading-tight pb-4 md:pb-0 text-center md:text-left'><span className='text-purple'>J</span>annick<span className='text-purple'> S</span>achariasen</h1>
                    <div className='bg-purple rounded-full w-[70%] m-auto md:w-[100%]'>
                        <img className='opacity-90 w-[100%]' src={Avatar} alt="Avatar" />
                    </div>
                    <div className='text-purple opacity-50 flex justify-center md:justify-end items-center pt-4 md:pt-4'>
                        <a href="#contact" className='z-0 flex items-center cursor-pointer'>
                            <p className='font-bold text-[4.5vw] bg-transparent'><PiPaperPlaneTiltLight /></p><p className='font-bold text-[2.4vw]'>Let's Talk</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
