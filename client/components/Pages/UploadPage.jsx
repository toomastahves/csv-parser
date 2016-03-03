import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import UploadForm from '../Parts/UploadForm';
import UploadResult from '../Parts/UploadResult';
import { connect } from 'react-redux';
import { uploadRequest } from '../../actions/upload';

export const UploadPage = ({ dispatch, result, error, progress }) => {
  const handleUpload = (files) => {
    files.forEach((file) => {
      dispatch(uploadRequest(file));
    });
  };
  const handleSendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <UploadForm handleUpload={handleUpload} />
      <UploadResult result={result} error={error} progress={progress} />
    </div>
  );
};

UploadPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  result: PropTypes.object,
  error: PropTypes.object,
  progress: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    result: state.uploadReducer.result,
    error: state.uploadReducer.error,
    progress: state.uploadReducer.progress
  };
};

export default connect(mapStateToProps)(ContentLayout(UploadPage));
