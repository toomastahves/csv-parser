import { VALIDATE_EMAIL_FORM, TOGGLE_DATEPICKER_VISIBILITY, EMAIL_SENT_TOGGLE } from '../constants/email';
import { EMAIL_URI } from '../constants/uri';

// http://stackoverflow.com/a/46181
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const emailSentToggle = () => {
  return {
    type: EMAIL_SENT_TOGGLE
  };
};

export const sendEmail = (email, importdate, result) => {
  console.log('Sending e-mail');
  return dispatch => {
    const req = new XMLHttpRequest();
    const params = `email=${email}&importdate=${importdate}&time=${result.time}&tableName=${result.tableName}`;
    req.open('GET', `${EMAIL_URI}?${params}`);
    req.onreadystatechange = () => {
      console.log(req.responseText);
      if(req.readyState === 4 && req.status === 200) {
        dispatch(emailSentToggle());
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
