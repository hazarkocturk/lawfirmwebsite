import React from 'react';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';

// import logo
import Logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header className='py-[42px] px-6 lg:px-0'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='logo image' />
        </a>
        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
