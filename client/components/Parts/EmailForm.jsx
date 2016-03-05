import React, { PropTypes } from 'react';
import DatePickerWrapper from './DatepickerWrapper';

export const EmailForm = ({ handleSendEmail, handleDatepickerVisiblity, datePickerVisibility, emailSent }) => {

  if(emailSent) {
    return (
      <div>
        {'Email has been sent.'}
      </div>
    );
  }

  return (
    <div className='email-form'>
      <form onSubmit={handleSendEmail}>
        <div>
          {'Please fill e-mail form if you wish results to be e-mailed to you.'}
        </div>
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
  emailSent: PropTypes.bool
};

export default EmailForm;
