import React, { PropTypes } from 'react';

export const UploadForm = ({ handleUpload }) => {
  return (
    <form onSubmit={handleUpload}>
      <div>{'Enter email and select CSV file to upload'}</div>
      <div>
        <label htmlFor='email'>{'Email'}</label>
        <input type='text' name='email' />
      </div>
      <div>
        <label htmlFor='file'>{'File'}</label>
        <input type='file' name='file' />
      </div>
      <div>
        <button>{'Upload'}</button>
      </div>
    </form>
  );
};

UploadForm.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default UploadForm;
