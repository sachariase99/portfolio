import React from 'react'
import CardDescription from './cardDescription'
import design from '../images/DesignIcon.svg'
import code from '../images/CodeIcon.svg'
import project from '../images/ProjectsIcon.svg'

const About = () => {
  return (
    <div id='about' className='-mt-32 pt-32 border-b border-purple pb-8'>
      {/* CARDS */}
      <div className='text-white grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-8 md:gap-x-8 xl:gap-0 text-center justify-center mt-8'>
        <div className='m-auto w-[250px] h-[250px] relative border-2 border-lightpurple rounded-3xl bg-purplehover duration-500'>
          <img className='w-[50%] h-[50%] m-auto' src={code} alt="Code" />
          <div className='absolute left-1/2 bottom-4 -translate-x-1/2'>
            <p className='text-white font-light text-lg'>Nine years of</p>
            <p className='text-white font-bold text-3xl'>experience</p>
          </div>
        </div>
        <div className='m-auto w-[250px] h-[250px] relative border-2 border-lightpurple rounded-3xl bg-purplehover duration-500'>
          <img className='w-[50%] h-[50%] m-auto' src={project} alt="Project" />
          <div className='absolute left-1/2 bottom-4 -translate-x-1/2'>
            <p className='text-white font-light text-lg'>23 completed</p>
            <p className='text-white font-bold text-3xl'>Projects</p>
          </div>
        </div>
        <div className='m-auto w-[250px] h-[250px] relative border-2 border-lightpurple rounded-3xl bg-purplehover duration-500 md:col-span-2 xl:col-span-1'>
          <img className='w-[50%] h-[50%] m-auto' src={design} alt="Design" />
          <div className='absolute left-1/2 bottom-4 -translate-x-1/2'>
            <p className='text-white font-light text-lg'>15+ happy</p>
            <p className='text-white font-bold text-3xl'>Customers</p>
          </div>
        </div>
      </div>
      {/* UNDER THE CARDS */}
      <CardDescription />
    </div>
  )
}

export default About
