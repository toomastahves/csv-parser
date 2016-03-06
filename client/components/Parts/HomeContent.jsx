import React from 'react';

export const HomeContent = () => {
  return (
    <div className='content home-content'>
      <h2>{'Setup and Configuration'}</h2>
      <div>
        <div>{'git clone https://github.com/toomastahves/csv-parser'}</div>
        <div>{'npm install'}</div>
        <div>{'npm start'}</div>
        <div>{'http://localhost:1337/'}</div>
        <div>{'Configure MySQL and E-mail connections in server/config/index.js file'}</div>
        <div>{'Optional: If you run API on different port other than 3000, configure client/constants/uri.js'}</div>
        <div>{'Upload file with 6 columns (int, string, int, string, string, string), example:'}</div>
        <div>{'1,Fred Caldwell,61,Bater Circle,339 Posa Grove,YELLOW'}</div>
        <div>{'2,Teresa Craig,21,Epoese Ridge,233 Urulu Square,BLUE'}</div>
      </div>
      <h2>{'Functionality'}</h2>
      <div>
        <div>{'Uploads CSV file and inserts into MySQL database.'}</div>
        <div>{'Shows e-mail form after upload is completed and sends e-mail.'}</div>
        <div>{'Lists tables where CSV files were uploaded.'}</div>
        <div>{'Allows searching upon selected table.'}</div>
      </div>
      <h2>{'Issues'}</h2>
      <div>
        <div>{'File upload too slow on big files, because it inserts one row at a time.'}</div>
        <div>{'On multiple file uploads, it shows results for just one file.'}</div>
        <div>{'Upload time is calculated upon request end, not upon last insertion to database.'}</div>
        <div>{'Implement proper error handling, so Node won\'t crash.'}</div>
      </div>
      <h2>{'Todos'}</h2>
      <div>
        <div>{'Write unit tests.'}</div>
        <div>{'Find faster solution for file uploads.'}</div>
        <div>{'Create feedback for multiple file uploads.'}</div>
        <div>{'Allow any CSV file to be uploaded, not just 6 column files.'}</div>
        <div>{'Add proper pagination for search, currently just limits to 1000.'}</div>
        <div>{'Write unit tests.'}</div>
      </div>
    </div>
  );
};

export default HomeContent;
