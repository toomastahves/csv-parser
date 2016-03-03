import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import UploadForm from '../Parts/UploadForm';
import UploadResult from '../Parts/UploadResult';
import { connect } from 'react-redux';
import { uploadRequest } from '../../actions/upload';

export const UploadPage = ({ dispatch, result, error, progress }) => {
  const handleUpload = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    dispatch(uploadRequest(form));
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
  result: PropTypes.string,
  error: PropTypes.string,
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
