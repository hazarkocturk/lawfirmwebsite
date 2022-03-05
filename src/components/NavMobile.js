import React, { useState } from 'react';

// import icons
import BarsIcon from '../assets/img/bars.png';
import CloseIcon from '../assets/img/close.png';

// import navigation data
import { navigation } from '../data';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='lg:hidden relative z-10'>
      {/* menu icon */}
      <a href='#' onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt='' />
      </a>
      {/* navigation */}
      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-primary fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        {/* close icon */}
        <a
          className='absolute top-6 left-6'
          href='#'
          onClick={() => setIsOpen(false)}
        >
          <img src={CloseIcon} alt='' />
        </a>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a href='#'>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
