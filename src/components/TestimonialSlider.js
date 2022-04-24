import React from 'react';

// import testimonials data
import { testimonials } from '../data.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../testimonialSlider.css';

// import required modules
import { Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        autoplay={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { text, name, image, position } = item;
          return (
            <SwiperSlide key={index}>
              <div className='relative lg:mt-[34px] before:content-quote p-8'>
                <div>
                  <p>{text}</p>
                  <div className='flex items-center mt-[18px] mb-8'>
                    <img src={image} alt='' />
                    <div className='ml-4'>
                      <h6 className='font-bold'>{name}</h6>
                      <p className='text-sm'>{position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
