import addListIcon from "../assets/pluswhite.png";
import removeListIcon from "../assets/checkwhite.png";
import "../componentCss/MovieCard.css";
import { useWatchListContext } from "../context/WatchListContext";

const WatchListIcon = ({ id }) => {
  console.log(`faicon ${id}`);
  const { addWatchList, removeFromWatchList, inWatchList } =
    useWatchListContext();

  const handleWatchList = (id) => {
    if (!inWatchList(id)) {
      addWatchList(id);
    } else {
      removeFromWatchList(id);
    }
  };

  return (
    <img
      src={inWatchList(id) ? removeListIcon : addListIcon}
      onClick={() => handleWatchList(id)}
      className="watch-list-icon"
      alt="watch-list-icon"
    ></img>
  );
};

export default WatchListIcon;
