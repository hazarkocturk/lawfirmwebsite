import React, { useState } from 'react';

// import icons
import BarsIcon from '../assets/img/bars.png';
import CloseIcon from '../assets/img/close.png';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='lg:hidden relative z-20'>
      {/* menu icon */}
      <button onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt='' />
      </button>
      {/* navigation */}
      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-primary fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}
      >
        {/* close icon */}
        <button
          className='absolute top-6 left-6'
          onClick={() => setIsOpen(false)}
        >
          <img src={CloseIcon} alt='' />
        </button>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                offset={-220}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
