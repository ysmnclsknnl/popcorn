import React, { useState } from "react";
import Select from "react-select";
import "../componentCss/Pagination.css";

const Pagination = ({ currentPage, handleCurrentPage, totalPages }) => {
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [];
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    options.push({ value: pageNumber, label: pageNumber });
  }

  return (
    <div className="page-controllers-container">
      <button
        onClick={() =>
          handleCurrentPage(
            currentPage === totalPages ? currentPage : currentPage + 1
          )
        }
      >
        Next
      </button>

      <Select
        className="select-page"
        defaultValue={selectedOption}
        onChange={(e) => {
          setSelectedOption(e);
          handleCurrentPage(selectedOption.value);
        }}
        options={options}
      />

      <button
        onClick={() =>
          handleCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
        }
      >
        previous
      </button>
    </div>
  );
};

export default Pagination;
