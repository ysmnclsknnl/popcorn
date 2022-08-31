import React, { useContext, useState, createContext } from "react";

export const AccountContext = createContext();
export const useAccountContext = () => useContext(AccountContext);

export const AccountProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const addFavorites = (id) => {
    setFavorites([...favorites, id]);
  };
  const removeFavorites = (id) => {
    setFavorites(favorites.filter((item) => item !== id));
  };

  const isFavorite = (id) => favorites.includes(id);
  const addWatchList = (id) => {
    setWatchList([...watchList, id]);
  };
  const removeFromWatchList = (id) => {
    setWatchList(watchList.filter((item) => item !== id));
  };

  const inWatchList = (id) => watchList.includes(id);
  return (
    <AccountContext.Provider
      value={{
        favorites,
        setFavorites,
        addFavorites,
        removeFavorites,
        isFavorite,
        watchList,
        setWatchList,
        addWatchList,
        removeFromWatchList,
        inWatchList,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
