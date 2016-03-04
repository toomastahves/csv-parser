import { EMAIL_FORM_SUBMIT, VALIDATE_EMAIL_FORM, TOGGLE_DATEPICKER_VISIBILITY } from '../constants/email';
import { EMAIL_URI } from '../constants/uri';
import store from '../store/';

// http://stackoverflow.com/a/46181
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const sendEmail = (email, importdate) => {
  console.log('Sending e-mail');
  return dispatch => {
    //const req = new XMLHttpRequest();
    //req.open('POST', `${EMAIL_URI}`);
    //req.send(form);
  };
};

export const validateFormValues = (email, importdate) => {
  // Basic validation
  const resultEmail = validateEmail(email);
  const resultImportdate = importdate !== '';
  const result = resultEmail && resultImportdate;
  if(result) {
    store.dispatch(sendEmail(email, importdate));
  } else {
    console.log('Problems with form');
    return {
      type: VALIDATE_EMAIL_FORM,
      result
    };
  }
};

export const toggleDatepickerVisibility = () => {
  return {
    type: TOGGLE_DATEPICKER_VISIBILITY
  };
};
