import React, { PropTypes } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/base.css';
import 'react-date-picker/theme/hackerone.css';
import fecha from 'fecha';

export const DatePickerWrapper = ({ resultLocationId }) => {
  const onChange = (dateString, moment) => {
    const importDayBox = document.getElementById(resultLocationId);
    importDayBox.value = fecha.format(new Date(moment), 'DD MMM YYYY');
  };
  return (
    <DatePicker
      onChange={onChange}
      hideFooter={true}
    />
  );
};

DatePickerWrapper.propTypes = {
  resultLocationId: PropTypes.string.isRequired
};

export default DatePickerWrapper;
