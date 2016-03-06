import React, { PropTypes } from 'react';
import DatePickerWrapper from './DatePickerWrapper';
import Spinner from './Spinner';

export const EmailForm = ({ handleSendEmail, handleDatepickerVisiblity, datePickerVisibility, emailSent, sendingEmail }) => {
  if(emailSent) {
    return (
      <div className='note'>
        {'E-mail has been sent.'}
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
            placeholder='Select import date' id='importdate' autoComplete='off'
          />
        {datePickerVisibility && <DatePickerWrapper resultLocationId='importdate' />}
        </div>
        <button className='email-form-button' type='submit'>{'Send results to email'}</button>
        <div className='note'>{sendingEmail && <Spinner />}</div>
      </form>
    </div>
  );
};

EmailForm.propTypes = {
  handleSendEmail: PropTypes.func.isRequired,
  handleDatepickerVisiblity: PropTypes.func.isRequired,
  datePickerVisibility: PropTypes.bool.isRequired,
  emailSent: PropTypes.bool,
  sendingEmail: PropTypes.bool
};

export default EmailForm;
