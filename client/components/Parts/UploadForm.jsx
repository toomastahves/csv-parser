import React, { PropTypes } from 'react';

export const UploadForm = ({ handleUpload }) => {
  return (
    <form onSubmit={handleUpload} className='pure-form pure-form-aligned'>
      <div className='pure-control-group'>
        <input placeholder='Enter e-mail' type='text' name='email' />
      </div>
      <div className='pure-control-group'>
        <input type='file' name='file' />
      </div>
      <button type='submit' className='pure-button pure-button-primary'>{'Upload'}</button>
    </form>
  );
};

UploadForm.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default UploadForm;
