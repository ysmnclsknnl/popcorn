import React, { useContext, useState, createContext, useEffect } from "react";
import { getMovieSearchUrl } from "../helpers/getUrl";

export const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUrl, setPageUrl] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [options, setOptions] = useState([]);

  const handlePageUrl = (query) => {
    setPageUrl(query.length > 0 ? getMovieSearchUrl(query, currentPage) : "");
    console.log(`url in context is ${pageUrl}`);
  };

  const getOptions = () => {
    const newOptions = [];
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      newOptions.push({ value: pageNumber, label: pageNumber });
    }
    setOptions([...newOptions]);
  };

  useEffect(() => {
    getOptions();
  }, [totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleTotalPage = (totalPag) => {
    setTotalPages(totalPag);
  };

  return (
    <SearchContext.Provider
      value={{
        pageUrl,
        handlePageUrl,
        handlePageChange,
        handleTotalPage,
        options,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
