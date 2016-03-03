import React, { PropTypes } from 'react';

export const UploadResult = ({ result, error, progress }) => {
  console.log(result, error);

  return (
    <div className='upload-result'>
      {result ? <div>{'Total time: '}{result.time}{'ms'}</div> : <div></div>}
      {result ? <div>{'Data inserted into table: '}{result.tableName}</div> : <div></div>}
      {error ? <div>{error.error}</div> : <div></div>}
      {progress ? <div>{'Completion:'}{progress}{'%'}</div> : <div></div>}
    </div>
  );
};

UploadResult.propTypes = {
  result: PropTypes.object,
  error: PropTypes.object,
  progress: PropTypes.number
};

export default UploadResult;
