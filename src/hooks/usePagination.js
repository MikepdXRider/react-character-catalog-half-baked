import { useState } from 'react';

export const usePagination = (initialPage = 1, pageCount = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(pageCount);

  const viewPrevPage = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };

  const viewNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((page) => page + 1);
  };

  return {
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
    viewPrevPage,
    viewNextPage,
  };
};
