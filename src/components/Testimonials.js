import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='h-[346px]'>
      <div className='container mx-auto h-full flex items-center justify-end'>
        <div className='max-w-md mx-auto lg:mx-0 lg:max-w-[570px]'>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
