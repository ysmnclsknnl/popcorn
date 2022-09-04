import React, { useContext, useState, createContext } from "react";

export const WatchListContext = createContext();
export const useWatchListContext = () => useContext(WatchListContext);

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addWatchList = (id) => {
    setWatchList([...watchList, id]);
  };
  const removeFromWatchList = (id) => {
    setWatchList(watchList.filter((item) => item !== id));
  };

  const inWatchList = (id) => watchList.includes(id);

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        addWatchList,
        removeFromWatchList,
        inWatchList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
