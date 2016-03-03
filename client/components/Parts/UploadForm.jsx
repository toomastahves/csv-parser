import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';

export const UploadForm = ({ handleUpload }) => {
  return (
    <div className='dropzone-style'>
      <Dropzone onDrop={handleUpload}>
        <div className='dragdrop-message'>{'Click or drag & drop your CSV file here'}</div>
      </Dropzone>
    </div>
  );
};

UploadForm.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default UploadForm;
