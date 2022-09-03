import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../componentCss/Pagination.css";

const Pagination = ({ currentPage, handleCurrentPage, totalPages }) => {
  const options = [];
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    options.push({ value: pageNumber, label: pageNumber });
  }

  const [selectedOption, setSelectedOption] = useState({ value: 1, label: 1 });

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
          console.log(
            `selectedoption ${
              selectedOption.value ? selectedOption.value : "no value"
            }`
          );
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
