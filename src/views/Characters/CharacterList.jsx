import { useEffect, useState } from 'react';
import Characters from '../../components/Characters/Characters';
import Pagination from '../../components/Pagination/Pagination';
import { usePagination } from '../../hooks/usePagination';
import { getCharacters } from '../../services/rickAndMortyApi';

import loadingSpinner from '../../assets/images/loading-spinner.gif';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    currentPage,
    totalPages,
    setCurrentPage,
    setTotalPages,
    viewNextPage,
    viewPrevPage,
  } = usePagination();

  useEffect(() => {
    setLoading(true);
    getCharacters(currentPage)
      .then((res) => {
        setTotalPages(res.pages);
        setCharacters(res.characters);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  return (
    <>
      <h1>
        Characters{' '}
        {loading && (
          <img
            src={loadingSpinner}
            alt="loading characters"
            style={{ width: '20px', height: '20px', display: 'inline' }}
          />
        )}
      </h1>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        viewNextPage={viewNextPage}
        viewPrevPage={viewPrevPage}
      />
      {!loading && <Characters characters={characters} />}
    </>
  );
}
