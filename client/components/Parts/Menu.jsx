import React, { PropTypes } from 'react';

export const Menu = () => {
  return (
    <div className='menu'>
      <a href='#/home'>{'Home'}</a>
      <a href='#/upload'>{'Upload'}</a>
      <a href='#/search'>{'Search'}</a>
    </div>
  );
};

Menu.propTypes = {

};

export default Menu;
