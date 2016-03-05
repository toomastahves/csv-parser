import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import SearchForm from '../Parts/SearchForm';
import SearchResult from '../Parts/SearchResult';
import { connect } from 'react-redux';
import { search, tableList } from '../../actions/search';

export const SearchPage = ({ dispatch, result, tableList, fetchingSearchResults, fetchingTableList }) => {
  if(fetchingTableList) {
    return (
      <div>
        {'Looking for existing tables...'}
      </div>
    );
  }

  if(tableList.length === 0) {
    return (
      <div>
        {'No tables in database. Please upload file to search on it.'}
      </div>
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.querySelector('[name="query"]').value;
    const tablename = e.target.querySelector('[name="tablename"]').value;
    dispatch(search(query, tablename));
  };
  return (
    <div>
      <SearchForm handleSearch={handleSearch} tableList={tableList} />
      <SearchResult result={result} fetchingSearchResults={fetchingSearchResults} />
    </div>
  );
};

SearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tableList: PropTypes.array,
  fetchingSearchResults: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    result: state.searchReducer.result,
    error: state.searchReducer.error,
    tableList: state.searchReducer.tableList,
    fetchingTableList: state.searchReducer.fetchingTableList,
    fetchingSearchResults: state.searchReducer.fetchingSearchResults
  };
};

const mapDispatchToProps = (dispatchOnLoad, ownProps) => {
  dispatchOnLoad(tableList());
  return dispatch => ({ dispatch });
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(SearchPage));
