import React, { PropTypes } from 'react';
import './styles/style.css';
import 'purecss/build/pure-min.css';

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
