import {
  FaStepForward,
  FaFastForward,
  FaStepBackward,
  FaFastBackward,
} from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleButtonClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center p-2">
      <button
        className="mx-2"
        onClick={() => handleButtonClick(1)}
        disabled={currentPage === 1}
      >
        <FaFastBackward />
      </button>
      <button
        className="mx-2"
        onClick={() => handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaStepBackward />
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handleButtonClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-2"
      >
        <FaStepForward />
      </button>
      <button
        className="mx-2"
        onClick={() => handleButtonClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        <FaFastForward />
      </button>
    </div>
  );
};

export default Pagination;
