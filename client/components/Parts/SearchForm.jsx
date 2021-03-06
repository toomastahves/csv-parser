import React, { PropTypes } from 'react';
import shortid from 'shortid';

export const SearchForm = ({ handleSearch, tableList }) => {
  return (
    <form onSubmit={handleSearch} className='search-form'>
      <select name='tablename'>{tableList.map(opt => <option key={shortid.generate()}>{opt}</option>)}</select>
      <input placeholder='Search query' type='text' name='query' />
      <button type='submit'>{'Search'}</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  tableList: PropTypes.array
};

export default SearchForm;
