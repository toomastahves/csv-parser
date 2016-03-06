import React, { PropTypes } from 'react';
import './styles/common.css';
import './styles/emailform.css';
import './styles/uploadform.css';
import './styles/searchform.css';
import './styles/homepage.css';
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
