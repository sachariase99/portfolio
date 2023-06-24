import React from 'react'
import { cucode, tshop } from '../images'

const PortfolioCards = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mt-8'>
                <a href="http://cucode.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
                    <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
                        <p className='text-white mt-4 font-bold text-xl'>CuCode</p>
                        <img className='p-4' src={cucode} alt="Cucode" />
                    </div>
                </a>
                <a href="http://t-shop.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
                    <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
                        <p className='text-white mt-4 font-bold text-xl'>T-Shop</p>
                        <img className='p-4' src={tshop} alt="T-Shop" />
                    </div>
                </a>
                <a href="http://cucode.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
                    <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
                        <p className='text-white mt-4 font-bold text-xl'>CuCode</p>
                        <img className='p-4' src={cucode} alt="" />
                    </div>
                </a>
                <a href="http://cucode.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
                    <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
                        <p className='text-white mt-4 font-bold text-xl'>CuCode</p>
                        <img className='p-4' src={cucode} alt="" />
                    </div>
                </a>
                <a href="http://cucode.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
                    <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
                        <p className='text-white mt-4 font-bold text-xl'>CuCode</p>
                        <img className='p-4' src={cucode} alt="" />
                    </div>
                </a>
                <a href="http://cucode.portfolio-sachariase.com" target='_blank' rel='noreferrer'>
                    <div className='w-[250px] border-2 border-purple rounded-2xl bg-purplehover duration-500'>
                        <p className='text-white mt-4 font-bold text-xl'>CuCode</p>
                        <img className='p-4' src={cucode} alt="" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default PortfolioCards
