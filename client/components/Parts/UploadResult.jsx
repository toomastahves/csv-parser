import React, { PropTypes } from 'react';
import EmailForm from './EmailForm';

export const UploadResult = ({ uploadResult, error, handleSendEmail, handleDatepickerVisiblity, datePickerVisibility, emailSent, sendingEmail }) => {
  if(uploadResult === null) return <div></div>;

  return (
    <div>
      <div className='upload-result'>
        <div>{'Total time: '}{uploadResult.time}{' ms'}</div>
        <div>{'Rows count: '}{uploadResult.rowsCount}</div>
        <div>{'Data is inserted into table: '}{uploadResult.tableName}</div>
        {error ? <div>{error.error}</div> : <div></div>}
      </div>
      <EmailForm
        handleSendEmail={handleSendEmail}
        handleDatepickerVisiblity={handleDatepickerVisiblity}
        datePickerVisibility={datePickerVisibility}
        emailSent={emailSent}
        sendingEmail={sendingEmail}
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
  emailSent: PropTypes.bool,
  sendingEmail: PropTypes.bool
};

export default UploadResult;
