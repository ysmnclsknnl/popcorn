import React from "react";
import { usePaginationContext } from "../context/PaginationContext";

const Pagination = () => {
  const { totalPages } = usePaginationContext();
  const pages = [];

  const createPageList = () => {
    for (let page = 0; totalPages < 5; page++) {
      pages.push(page);
    }
  };
  createPageList();
  return (
    <ul>
      {pages.map((page) => (
        <li>{page}</li>
      ))}
    </ul>
  );
};

export default Pagination;
