import React, { PropTypes } from 'react';
import EmailForm from './EmailForm';

export const UploadResult = ({ result, error, progress, handleSendEmail, handleDatepickerVisiblity, datePickerVisibility, emailSent }) => {
  if(progress !== 100) return <div></div>;

  return (
    <div>
      <div className='upload-result'>
        {result ? <div>{'Total time: '}{result.time}{'ms'}</div> : <div></div>}
        {result ? <div>{'Data is inserted into table: '}{result.tableName}</div> : <div></div>}
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
  result: PropTypes.object,
  error: PropTypes.object,
  progress: PropTypes.number,
  handleSendEmail: PropTypes.func.isRequired,
  handleDatepickerVisiblity: PropTypes.func.isRequired,
  datePickerVisibility: PropTypes.bool.isRequired,
  emailSent: PropTypes.bool
};

export default UploadResult;
