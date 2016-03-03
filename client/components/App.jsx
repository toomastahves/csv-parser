import React, { PropTypes } from 'react';
import './styles/style.css';

export const App = ({ children }) => {
  return(
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
