import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
  //TODO: refactoring by use memo!
  let pagesArray = getPagesArray(totalPages);

  console.log('####: [pagesArray]', pagesArray);
  return (
    <div className='page__wrapper'>
      {pagesArray.map(p => (
        <span key={p} className={page === p ? 'page page__current' : 'page'} onClick={() => changePage(p)}>
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
