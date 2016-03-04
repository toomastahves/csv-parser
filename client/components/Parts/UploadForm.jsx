import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';

export const UploadForm = ({ handleUpload, result, error, progress }) => {
  return (
    <div className='upload-form'>
      <Dropzone onDrop={handleUpload}>
        <div className='dropzone-message'>{'Click or drag & drop your CSV file here'}</div>
      </Dropzone>
      <div className='upload-result'>
        {result ? <div>{'Total time: '}{result.time}{'ms'}</div> : <div></div>}
        {result ? <div>{'Data inserted into table: '}{result.tableName}</div> : <div></div>}
        {error ? <div>{error.error}</div> : <div></div>}
        {progress ? <div>{'Completion:'}{progress}{'%'}</div> : <div></div>}
      </div>
    </div>
  );
};

UploadForm.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  result: PropTypes.object,
  error: PropTypes.object,
  progress: PropTypes.number
};

export default UploadForm;
