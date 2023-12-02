export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-2 py-2 px-4 bg-blue-500 text-white rounded ${
            currentPage === page ? "bg-blue-700" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
