import React, { PropTypes } from 'react';
import DatePickerWrapper from './DatepickerWrapper';

export const EmailForm = ({ handleSendEmail, handleDatepickerVisiblity, datepickerVisibility, importdate }) => {
  return (
    <form onSubmit={handleSendEmail} className='pure-form pure-form-aligned'>
      {'While uploading, you can fill form below if you want results to be sent on e-mail after file is uploaded.'}
      <div className='pure-control-group'>
        <input placeholder='Email' type='text' name='email' />
      </div>
      <div className='pure-control-group'>
        <input placeholder='Select import date' type='text' name='importdate' />
      </div>
      <div>
        <input
          value={importdate}
          onClick={handleDatepickerVisiblity}
          className='selectbox-aligned disabled' type='text' placeholder={'Birthday'} id='birthday' disabled autoComplete='off'
        />
      {datepickerVisibility && <DatePickerWrapper resultLocationId='importdate' />}
      </div>
      <button type='submit' className='pure-button pure-button-primary'>{'Send results to email'}</button>
    </form>
  );
};

EmailForm.propTypes = {
  handleSendEmail: PropTypes.func.isRequired
};

export default EmailForm;
