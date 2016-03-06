import React, { PropTypes } from 'react';
import EmailForm from './EmailForm';

export const UploadResult = ({ uploadResult, error, progress, handleSendEmail, handleDatepickerVisiblity, datePickerVisibility, emailSent }) => {
  if(uploadResult === null) return <div></div>;

  return (
    <div>
      <div className='upload-result'>
        {uploadResult ? <div>{'Total time: '}{uploadResult.time}{' ms'}</div> : <div></div>}
        {uploadResult ? <div>{'Rows count: '}{uploadResult.rowsCount}</div> : <div></div>}
        {uploadResult ? <div>{'Data is inserted into table: '}{uploadResult.tableName}</div> : <div></div>}
        {error ? <div>{error.error}</div> : <div></div>}
      </div>
      <EmailForm
        handleSendEmail={handleSendEmail}
        handleDatepickerVisiblity={handleDatepickerVisiblity}
        datePickerVisibility={datePickerVisibility}
        emailSent={emailSent}
      />
    </div>
  );
};

UploadResult.propTypes = {
  uploadResult: PropTypes.object,
  error: PropTypes.object,
  progress: PropTypes.number,
  handleSendEmail: PropTypes.func.isRequired,
  handleDatepickerVisiblity: PropTypes.func.isRequired,
  datePickerVisibility: PropTypes.bool.isRequired,
  emailSent: PropTypes.bool
};

export default UploadResult;
