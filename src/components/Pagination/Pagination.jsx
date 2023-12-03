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

  const getPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handleButtonClick(i)}
          className={`mx-1 page-button ${
            currentPage === i ? "bg-gray-100" : "bg-white"
          }`}
          style={{ padding: "0.5rem 1rem" }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="flex justify-center p-2 items-center">
      <button
        className="mx-1 first-page"
        onClick={() => handleButtonClick(1)}
        disabled={currentPage === 1}
      >
        <FaFastBackward />
      </button>
      <button
        className="mx-1 previous-page"
        onClick={() => handleButtonClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaStepBackward />
      </button>
      {getPageButtons()}
      <button
        onClick={() => handleButtonClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-1 next-page"
      >
        <FaStepForward />
      </button>
      <button
        className="mx-1 last-page"
        onClick={() => handleButtonClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        <FaFastForward />
      </button>
    </div>
  );
};

export default Pagination;
