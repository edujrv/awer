import { useState } from 'react';

const usePagination = (initialPage = 0) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 0) {
      setPage(newPage);
    }
  };

  return { page, setPage, handlePageChange };
};

export default usePagination;
