import React from 'react';

// import team data
import { team } from '../data';

const Team = () => {
  return (
    <section id='team' className='section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          Ekibimiz
        </h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[20px]'>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10'>
          {team.map((item, index) => {
            const { image, name, position, description } = item;
            return (
              <div className='text-center' key={index}>
                <img className='max-h-56 mx-auto mb-4 lg:max-h-[300px]' src={image} alt={name} />
                <h4 className='text-2xl mb-2 font-primary font-bold'>{name}</h4>
                <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'>
                  {position}
                </p>
                <p className='max-w-[332px] mx-auto'>
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
