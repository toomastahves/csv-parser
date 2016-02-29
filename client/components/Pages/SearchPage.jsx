import React, { PropTypes } from 'react';
import ContentLayout from '../Layouts/Content';
import SearchForm from '../Parts/SearchForm';
import SearchResult from '../Parts/SearchResult';

export const SearchPage = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <SearchResult />
    </div>
  );
};

SearchPage.propTypes = {

};

export default ContentLayout(SearchPage);
