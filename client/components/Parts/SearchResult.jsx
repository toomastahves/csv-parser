import React, { PropTypes } from 'react';

export const SearchResult = ({ result }) => {
  if(result.length === 0) return <div></div>;

  return (
    <div>
      {result.map((row) => <div key={row.id}>{row.name}</div>)}
    </div>
  );
};

SearchResult.propTypes = {
  result: PropTypes.array
};

export default SearchResult;
