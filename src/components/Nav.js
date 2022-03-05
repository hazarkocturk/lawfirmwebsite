import React from 'react';

// import navigation data
import { navigation } from '../data';

const Nav = () => {
  return (
    <nav className='hidden lg:flex z-10'>
      <ul className='lg:flex space-x-6 font-body font-semibold text-sm text-primary'>
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

export default Nav;
