import { VALIDATE_EMAIL_SUCCESS, VALIDATE_EMAIL_ERROR } from '../constants/email';
import { EMAIL_URI } from '../constants/uri';

// http://stackoverflow.com/a/46181
const validate = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validateEmail = (email) => {
  const result = validate(email);
  if(result)
    return { type: VALIDATE_EMAIL_SUCCESS };

  return { type: VALIDATE_EMAIL_ERROR };
};
