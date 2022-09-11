import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../componentCss/Pagination.css";
import { useSearchContext } from "../context/SearchContext";

const Pagination = () => {
  //Set Select Box Options
  const [selectedOption, setSelectedOption] = useState(null);

  const { options, currentPage, handlePageChange, totalPages } =
    useSearchContext();

  useEffect(() => {
    if (selectedOption) {
      handlePageChange(selectedOption.value);
    }
  }, [selectedOption, handlePageChange]);

  return (
    <div className="page-controllers-container">
      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() =>
          handlePageChange(currentPage === 1 ? currentPage : currentPage - 1)
        }
      >
        previous
      </button>

      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className="select-page"
      />

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => {
          handlePageChange(
            currentPage < totalPages ? currentPage + 1 : currentPage
          );
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
