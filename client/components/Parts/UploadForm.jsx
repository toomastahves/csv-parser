import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import Spinner from './Spinner';

export const UploadForm = ({ handleUpload, progress, uploadResult }) => {

  if(progress > 0 && progress !== 100) {
    return (
      <div className='upload-form'>
        <Dropzone onDrop={handleUpload}>
          <div className='dropzone-message'>
            <div>{'Please wait, uploading... '}{progress}{'%'}</div>
            <Spinner />
          </div>
        </Dropzone>
      </div>
    );
  }

  if(progress === 100 && uploadResult === null) {
    return (
      <div className='upload-form'>
        <Dropzone onDrop={handleUpload}>
          <div className='dropzone-message'>
            <div>{'Upload 100% complete, finishing...'}</div>
            <Spinner />
          </div>
        </Dropzone>
      </div>
    );
  }

  return (
    <div className='upload-form'>
      <Dropzone onDrop={handleUpload}>
        <div className='dropzone-message'>{'Click or drag & drop your CSV file here'}</div>
      </Dropzone>
    </div>
  );
};

UploadForm.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  progress: PropTypes.number,
  uploadResult: PropTypes.object
};

export default UploadForm;
