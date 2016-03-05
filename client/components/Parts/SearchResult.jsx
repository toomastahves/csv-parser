import React, { PropTypes } from 'react';
import { Table, Thead, Th } from 'reactable';

export const SearchResult = ({ result, fetchingSearchResults }) => {
  if(result.length === 0) return <div></div>;
  if(fetchingSearchResults) return <div>{'Searching...'}</div>;

  console.log(result);
  return (
    <div>
      <Table
        className='pure-table pure-table-horizontal table-wrap'
        sortable={true}
        defaultSort={{ column: 'id', direction: 'desc' }}
        noDataText='No matching records found.'
        itemsPerPage={10} pageButtonLimit={10}
        data={result}
        filterable={['name', 'address1', 'address2', 'team']}
      >
        <Thead>
          <Th column='id'>
            <strong className='id-header'>{'ID'}</strong>
          </Th>
          <Th column='name'>
            <strong className='name-header'>{'Name'}</strong>
          </Th>
          <Th column='age'>
            <strong className='age-header'>{'Age'}</strong>
          </Th>
          <Th column='address1'>
            <strong className='address1-header'>{'Address1'}</strong>
          </Th>
          <Th column='address2'>
            <strong className='address2-header'>{'Address2'}</strong>
          </Th>
          <Th column='team'>
            <strong className='team-header'>{'Team'}</strong>
          </Th>
        </Thead>
      </Table>
    </div>
  );
};

SearchResult.propTypes = {
  result: PropTypes.array,
  fetchingSearchResults: PropTypes.bool
};

export default SearchResult;
