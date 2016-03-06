import { VALIDATE_EMAIL_FORM, TOGGLE_DATEPICKER_VISIBILITY, EMAIL_SENT_TOGGLE, SENDING_EMAIL } from '../constants/email';
import { EMAIL_URI } from '../constants/uri';

// http://stackoverflow.com/a/46181
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const emailSentStatus = (emailSent) => {
  return {
    type: EMAIL_SENT_TOGGLE,
    emailSent
  };
};

export const sendingEmail = (sending) => {
  return {
    type: SENDING_EMAIL,
    sending
  };
};

export const sendEmail = (email, importdate, result) => {
  console.log('Sending e-mail');
  return dispatch => {
    dispatch(sendingEmail(true));
    const req = new XMLHttpRequest();
    const params = `email=${email}&importdate=${importdate}&time=${result.time}&tableName=${result.tableName}&rowsCount=${result.rowsCount}`;
    req.open('GET', `${EMAIL_URI}?${params}`);
    req.onreadystatechange = () => {
      if(req.readyState === 4 && req.status === 200) {
        dispatch(emailSentStatus(true));
        dispatch(sendingEmail(false));
      }
      if(req.readyState === 4 && req.status === 500) {
        console.log(req.responseText);
        dispatch(sendingEmail(false));
      }
    };
    req.send(params);
  };
};

export const validateFormValues = (email, importdate, result) => {
  // Basic validation
  const resultEmail = validateEmail(email);
  const resultImportdate = importdate !== '';
  const valResult = resultEmail && resultImportdate;
  return dispatch => {
    if(valResult) {
      return dispatch(sendEmail(email, importdate, result));
    }
    console.log('Problems with form');
    return {
      type: VALIDATE_EMAIL_FORM,
      result
    };
  };
};

export const toggleDatepickerVisibility = () => {
  return {
    type: TOGGLE_DATEPICKER_VISIBILITY
  };
};
