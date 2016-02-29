import React, { PropTypes } from 'react';

export const SearchForm = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <div>
        <label htmlFor='name'>{'Name'}</label>
        <input type='text' name='name' />
      </div>
      <div>
        <label htmlFor='address'>{'Address'}</label>
        <input type='text' name='address' />
      </div>
      <div>
        <label htmlFor='team'>{'Team'}</label>
        <input type='text' name='team' />
      </div>
      <div>
        <button type='submit'>{'Search'}</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchForm;
