import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../componentCss/Pagination.css";
import { useSearchContext } from "../context/SearchContext";

const Pagination = () => {
  const [selectedOption, setSelectedOption] = useState({ value: 1, label: 1 });
  const { options, currentPage, handlePageChange, totalPages } =
    useSearchContext();

  useEffect(() => {
    handlePageChange(selectedOption.value);
  }, [selectedOption]);

  return (
    <div className="page-controllers-container">
      <button
        onClick={() =>
          handlePageChange(
            currentPage === totalPages ? currentPage : currentPage + 1
          )
        }
      >
        Next
      </button>

      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className="select-page"
      />

      <button
        onClick={() =>
          handlePageChange(currentPage === 1 ? currentPage : currentPage - 1)
        }
      >
        previous
      </button>
    </div>
  );
};

export default Pagination;
