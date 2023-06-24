import React from 'react'
import { tailwind, nodejs, github, figma, html, react, javascript } from '../images'

const Technologies = () => {
    return (
        <div id='technologies' className='flex flex-col items-center text-center border-b border-purple pb-8 -mt-32 pt-32'>
            <p className='mt-8 mb-12 ml-0 mr-0 bg-darkpurple text-purple text-2xl pt-2 pb-2 pl-4 pr-4 rounded-xl uppercase font-bold'>🧑‍💻 Technologies</p>
            <p className='text-white opacity-50 text-2xl mb-2'>Technologies I use everyday</p>
            <div className='flex justify-center gap-4'>
                <img className='w-[8%] h-[8%]' src={react} alt="React" />
                <img className='w-[8%] h-[8%]' src={tailwind} alt="Tailwind" />
                <img className='w-[8%] h-[8%]' src={nodejs} alt="Nodejs" />
                <img className='w-[8%] h-[8%]' src={javascript} alt="Javascript" />
                <img className='w-[8%] h-[8%]' src={html} alt="HTML" />
                <img className='w-[8%] h-[8%]' src={github} alt="Github" />
                <img className='w-[8%] h-[8%]' src={figma} alt="Figma" />
            </div>
        </div>
    )
}

export default Technologies
