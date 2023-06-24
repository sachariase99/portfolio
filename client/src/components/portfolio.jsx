import React from 'react';
import PortfolioCards from './portfolioCards';

const Portfolio = () => {
  return (
    <div id='portfolio' className='border-b border-purple pb-8'>
      <div className='flex flex-col items-center text-center -mt-32 pt-32'>
        <p className='mt-8 mb-12 ml-0 mr-0 bg-darkpurple text-purple text-2xl pt-2 pb-2 pl-4 pr-4 rounded-xl uppercase font-bold'>🔗 Portfolio</p>
        <p className='text-white opacity-50 text-2xl mb-2'>Work and Projects</p>
        <PortfolioCards />
      </div>
    </div>
  );
};

export default Portfolio;
