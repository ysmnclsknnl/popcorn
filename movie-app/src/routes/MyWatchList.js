import React from "react";
import WatchListItem from "../components/WatchListItem";
import { useWatchListContext } from "../context/WatchListContext";

const MyWatchList = () => {
  const { watchList } = useWatchListContext();
  if (watchList.length === 0) {
    return (
      <div>
        <h3> No Movie is Found in Watch List</h3>
      </div>
    );
  }
  return (
    <div className="container-large">
      {watchList.map((id) => (
        <WatchListItem key={id} id={id} />
      ))}
    </div>
  );
};

export default MyWatchList;
