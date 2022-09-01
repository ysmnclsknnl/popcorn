import React, { useContext, useState, createContext } from "react";

export const PaginationContext = createContext();
export const usePaginationContext = () => useContext(PaginationContext);

export const PaginationProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log(`page is ${page},totalPages is ${totalPages}`);
  return (
    <PaginationContext.Provider
      value={{ page, setPage, totalPages, setTotalPages }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
