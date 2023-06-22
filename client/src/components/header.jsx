import React from 'react'
import Navbar from './navbar'
import Avatar from '../images/Jannick.png'

const Header = () => {
    return (
        <div className='h-[800px] max-w-[1500px] m-auto pl-4 pr-4'>
            <Navbar />
            <div className='sm:flex items-center h-[500px] relative'>
                <div className='bg-[#7B4AE2] 2xl:h-[450px] 2xl:w-[450px] xl:w-[400px] xl:h-[400px] absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-end rounded-full'>
                    <img className='opacity-90 w-[90%] h-[90%]' src={Avatar} alt="Avatar" />
                </div>
                <h1 className='text-white font-extrabold text-[52px] leading-[3.5rem]'><span className='text-purple'>J</span>annick<br /><span className='text-purple'>S</span>achariase</h1>
            </div>
        </div>
    )
}

export default Header
