import { VALIDATE_EMAIL_FORM, TOGGLE_DATEPICKER_VISIBILITY, EMAIL_SENT_TOGGLE } from '../constants/email';

const initialState = {
  fetching: false,
  result: '',
  datePickerVisibility: false,
  emailSent: false
};

export const emailReducer = (state = initialState, action) => {
  switch(action.type) {

    case VALIDATE_EMAIL_FORM:
      return Object.assign({}, state, { validationError: false, fetching: true, result: action.result });
    case TOGGLE_DATEPICKER_VISIBILITY:
      return Object.assign({}, state, { datePickerVisibility: !state.datePickerVisibility });
    case EMAIL_SENT_TOGGLE:
      return Object.assign({}, state, { emailSent: action.emailSent });
    default:
      return state;
  }
};
