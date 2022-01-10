import styles from './Pagination.css';

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  viewNextPage,
  viewPrevPage,
}) {
  return (
    <nav className={styles.container}>
      <button
        onClick={() => setCurrentPage(1)}
        disabled={currentPage <= 1}
        className={styles.button}
      >
        ⏪
      </button>
      <button
        onClick={viewPrevPage}
        disabled={currentPage <= 1}
        className={styles.button}
      >
        ◀️
      </button>
      <span className={styles.pageCount}>
        {currentPage} / {totalPages}{' '}
      </span>
      <button
        onClick={viewNextPage}
        disabled={currentPage >= totalPages}
        className={styles.button}
      >
        ▶️
      </button>
      <button
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage >= totalPages}
        className={styles.button}
      >
        ⏩
      </button>
    </nav>
  );
}
