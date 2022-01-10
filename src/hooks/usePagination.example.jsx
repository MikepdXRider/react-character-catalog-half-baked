import React, { useEffect } from 'react';
import { usePagination } from './usePagination';

export default function UsePaginationExample({ totalPages = 1 }) {
  const {
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
    viewNextPage,
    viewPrevPage,
  } = usePagination();

  useEffect(() => {
    // Mimic an async request by using setTimeout
    setTimeout(() => {
      setTotalPages(5);
    }, 250);
  }, []);

  return (
    <>
      <button
        onClick={() => setCurrentPage(1)}
        disabled={currentPage <= 1}
        aria-label="view first page"
      >
        &laquo;
      </button>
      <button
        onClick={viewPrevPage}
        disabled={currentPage <= 1}
        aria-label="view previous page"
      >
        &lt;
      </button>
      <span>
        {currentPage} / {totalPages}{' '}
      </span>
      <button
        onClick={viewNextPage}
        disabled={currentPage >= totalPages}
        aria-label="view next page"
      >
        &gt;
      </button>
      <button
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage >= totalPages}
        aria-label="view last page"
      >
        &raquo;
      </button>
    </>
  );
}
