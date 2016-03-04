import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import UploadForm from '../Parts/UploadForm';
import EmailForm from '../Parts/EmailForm';
import { connect } from 'react-redux';
import { uploadRequest } from '../../actions/upload';
import { validateFormValues, toggleDatepickerVisibility } from '../../actions/email';

export const UploadPage = ({ dispatch, result, error, progress, datePickerVisibility, validationError }) => {
  const handleUpload = (files) => {
    files.forEach((file) => {
      dispatch(uploadRequest(file));
    });
  };
  const handleDatepickerVisiblity = () => {
    dispatch(toggleDatepickerVisibility());
  };
  const handleSendEmail = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const importdate = document.getElementById('importdate').value;
    dispatch(validateFormValues(email, importdate));
  };
  return (
    <div>
      <UploadForm handleUpload={handleUpload} result={result} error={error} progress={progress} />
      <EmailForm handleSendEmail={handleSendEmail} handleDatepickerVisiblity={handleDatepickerVisiblity} datePickerVisibility={datePickerVisibility} />
    </div>
  );
};

UploadPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  result: PropTypes.object,
  error: PropTypes.object,
  progress: PropTypes.number,
  datePickerVisibility: PropTypes.bool.isRequired,
  validationError: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    result: state.uploadReducer.result,
    error: state.uploadReducer.error,
    progress: state.uploadReducer.progress,
    datePickerVisibility: state.emailReducer.datePickerVisibility,
    validationError: state.emailReducer.validationError
  };
};

export default connect(mapStateToProps)(ContentLayout(UploadPage));
