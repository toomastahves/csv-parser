import React, { PropTypes } from 'react';

export const SearchForm = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <div>
        <label htmlFor='query'>{'Search'}</label>
        <input type='text' name='query' />
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
