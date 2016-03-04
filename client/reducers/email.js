import { EMAIL_FORM_SUBMIT, VALIDATE_EMAIL_FORM, TOGGLE_DATEPICKER_VISIBILITY } from '../constants/email';

const initialState = {
  fetching: false,
  result: '',
  validationError: false,
  datePickerVisibility: false
};

export const emailReducer = (state = initialState, action) => {
  switch(action.type) {

    case EMAIL_FORM_SUBMIT:
      return Object.assign({}, state, { validationError: false, fetching: true, result: action.result });
    case VALIDATE_EMAIL_FORM:
      return Object.assign({}, state, { validationError: action.result });
    case TOGGLE_DATEPICKER_VISIBILITY:
      return Object.assign({}, state, { datePickerVisibility: !state.datePickerVisibility });

    default:
      return state;
  }
};
