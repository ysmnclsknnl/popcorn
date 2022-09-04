import React, { useContext, useState, createContext, useEffect } from "react";
import { getMovieSearchUrl } from "../helpers/getUrl";

export const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [options, setOptions] = useState([]);

  const pageUrl = query.length > 0 ? getMovieSearchUrl(query, currentPage) : "";

  //Sets query according to input in Search Box

  const handleSearchQuery = (searchInput) => {
    setQuery(searchInput);
  };

  //Sets Current Page According to new Search , Next Button, Previous Button or Select
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //Sets TotalPage When Search PageUrl Changes

  const handleTotalPage = (totalPag) => {
    setTotalPages(totalPag);
  };

  //Get Options For Select Component
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

  return (
    <SearchContext.Provider
      value={{
        pageUrl,
        currentPage,
        totalPages,
        handleSearchQuery,
        handlePageChange,
        handleTotalPage,
        options,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
