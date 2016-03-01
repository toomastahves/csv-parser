import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import SearchForm from '../Parts/SearchForm';
import SearchResult from '../Parts/SearchResult';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';

export const SearchPage = ({ dispatch, result }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRequest(e.target.querySelector('[name="query"]').value));
  };
  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <SearchResult result={result} />
    </div>
  );
};

SearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    result: state.searchReducer.result,
    error: state.searchReducer.error
  };
};

export default connect(mapStateToProps)(ContentLayout(SearchPage));
