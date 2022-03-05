import React from 'react';

// import components
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Team from './components/Team';
import Subscribe from './components/Subscribe';

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Subscribe />
    </div>
  );
};

export default App;
