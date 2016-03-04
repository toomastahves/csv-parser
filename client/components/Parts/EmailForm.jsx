import React, { PropTypes } from 'react';
import DatePickerWrapper from './DatepickerWrapper';

export const EmailForm = ({ handleSendEmail, validationError, handleDatepickerVisiblity, datePickerVisibility }) => {
  return (
    <div className='email-form'>
      <form onSubmit={handleSendEmail}>
        <div>{validationError ? '' : 'Please fill form'}</div>
        <div>
          <input placeholder='Email' type='text' name='email' className='email-form-input' />
        </div>
        <div>
          <input
            onClick={handleDatepickerVisiblity} className='importdate-input email-form-input'
            placeholder='Select import date' id='importdate' disabled autoComplete='off'
          />
        {datePickerVisibility && <DatePickerWrapper resultLocationId='importdate' />}
        </div>
        <button className='email-form-button' type='submit'>{'Send results to email'}</button>
      </form>
    </div>
  );
};

EmailForm.propTypes = {
  handleSendEmail: PropTypes.func.isRequired,
  handleDatepickerVisiblity: PropTypes.func.isRequired,
  datePickerVisibility: PropTypes.bool.isRequired,
  validationError: PropTypes.bool
};

export default EmailForm;
