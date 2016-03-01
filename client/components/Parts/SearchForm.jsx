import React, { PropTypes } from 'react';

export const SearchForm = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className='pure-form'>
      <input placeholder='Search query' type='text' name='query' />
      <button type='submit' className='pure-button pure-button-primary'>{'Search'}</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchForm;
