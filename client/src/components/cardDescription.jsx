import React from 'react'

const CardDescription = () => {
    return (
        <div className=' grid grid-cols-1 max-w-[250px] xl:max-w-[1250px] md:max-w-[750px] m-auto'>
            <div className='bg-darkpurple mt-8 rounded-3xl '>
                <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1'>
                    <div className='w-[100%] m-auto text-center mt-4 mb-4'>
                        <p className='font-light text-lg text-purple'>Developer</p>
                        <p className='font-bold text-4xl text-purple'>Front-end</p>
                    </div>
                    <div className='w-[100%] m-auto text-center mt-4 mb-4'>
                        <p className='font-light text-lg text-purple'>Dozen of work and</p>
                        <p className='font-bold text-4xl text-purple'>Experience</p>
                    </div>
                    <div className='w-[100%] m-auto text-center mt-4 mb-4 md:col-span-2 xl:col-span-1'>
                        <p className='font-light text-lg text-purple'>Designer, freelancer and</p>
                        <p className='font-bold text-4xl text-purple'>UI . UX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDescription
