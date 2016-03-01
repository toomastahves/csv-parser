import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import UploadForm from '../Parts/UploadForm';
import UploadResult from '../Parts/UploadResult';
import { connect } from 'react-redux';
import { uploadRequest } from '../../actions/upload';

export const UploadPage = ({ dispatch }) => {
  const handleUpload = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    dispatch(uploadRequest(form));
  };
  const handleSelectFile = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <UploadForm handleUpload={handleUpload} handleSelectFile={handleSelectFile} />
      <UploadResult />
    </div>
  );
};

UploadPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    result: state.uploadReducer.result,
    error: state.uploadReducer.error
  };
};

export default connect(mapStateToProps)(ContentLayout(UploadPage));
