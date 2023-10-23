import React from 'react'
import { Jannick } from '../images'

const About = () => {
    return (
        <div id='about' className='border-b border-purple pb-20 xl:pb-0 -mt-32 pt-32 '>
            <div className='max-w-[1500px] m-auto'>
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 m-auto'>
                    <img className='rounded-full col-span-1 md:grid-cols-1 p-8 w-[50%] xl:w-[100%] m-auto' src={Jannick} alt="Jannick" />
                    <div className='md:col-span-1 lg:col-span-2'>
                        <div className='text-white flex flex-col justify-center h-[100%] m-auto w-11/12'>
                            <p className='m-6 ml-0 bg-darkpurple text-purple text-xl w-[10.2rem] pt-2 pb-2 pl-4 pr-4 rounded-xl uppercase font-bold'>🧐about me</p>
                            <h2 className='font-bold text-4xl leading-normal'><span className='text-purple'>J</span>annick<span className='text-purple'> S</span>achariasen</h2>
                            <p>👋 My name is Jannick Sachariasen currently studying as a web-developer at Tech-College in Denmark </p>
                            <p>👨‍💻 Been coding for 9 years just as a hobby, but done a few jobs.</p>
                            <p>💡 Interests in Front-end development with React, and UX/UI Design.</p>
                            <p>🚀 Trying to be a little better than yesterday, every day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About