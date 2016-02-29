import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import UploadForm from '../Parts/UploadForm';
import UploadResult from '../Parts/UploadResult';

export const UploadPage = () => {
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <UploadForm handleUpload={handleUpload} />
      <UploadResult />
    </div>
  );
};

UploadPage.propTypes = {

};

export default ContentLayout(UploadPage);
