// import React from "react";
// import { usePaginationContext } from "../context/PaginationContext";

// const Pagination = () => {
//   const { totalPages } = usePaginationContext();
//   const pages = [];

//   const createPageList = () => {
//     for (let page = 0; totalPages < 5; page++) {
//       pages.push(page);
//     }
//   };
//   createPageList();
//   return (
//     <ul>
//       {pages.map((page) => (
//         <li>{page}</li>
//       ))}
//     </ul>
//   );
// };

// export default Pagination;

import React from "react";

import "../componentCss/Pagination.css";

const Pagination = ({ currentPage, handleCurrentPage, totalPages }) => {
  const pageNumbers = [];

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    pageNumbers.push(pageNumber);
  }

  return (
    <div className="pagination">
      <button
        onClick={() =>
          handleCurrentPage(
            currentPage === totalPages ? currentPage : currentPage + 1
          )
        }
      >
        Next
      </button>

      <select id="pages" name="pageNumbers" placeholder={1}></select>
      {pageNumbers.map((pageNumber) => (
        <option
          value="pageNumber"
          key={pageNumber}
          onChange={(e) => handleCurrentPage(e.target.value)}
        >
          {pageNumber}
        </option>
      ))}

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
