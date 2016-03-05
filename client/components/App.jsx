import React, { PropTypes } from 'react';
import './styles/common.css';
import './styles/emailform.css';
import './styles/uploadform.css';

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
