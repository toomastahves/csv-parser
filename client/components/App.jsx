import React, { PropTypes } from 'react';
import './styles/style.css';

export const App = ({ children }) => {
  return(
    <div className='center'>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
