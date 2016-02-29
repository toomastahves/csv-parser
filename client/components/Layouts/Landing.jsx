import React from 'react';
import Menu from '../Parts/Menu';
import HomeContent from '../Parts/HomeContent';
import Footer from '../Parts/Footer';

export const LandingLayout = () => {

  const Sub = () => {
    return (
      <div>
        <Menu />
        <HomeContent />
        <Footer />
      </div>
    );
  };

  return Sub;
};

export default LandingLayout;
