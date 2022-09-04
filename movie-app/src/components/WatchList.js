import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { useAccountContext } from "../context/AccountContext";

const WatchList = ({ id }) => {
  const { addWachList, removeFromWatchList, inWatchList } = useAccountContext();

  const handleWatchList = (id) => {
    if (!inWatchList(id)) {
      addWachList(id);
    } else {
      removeFromWatchList(id);
    }
  };

  return (
    <img
      src={inWatchList(id) ? heartSolid : heartRegular}
      onClick={() => handleWatchList(id)}
      className="fav-icon"
      alt="fav-icon"
    ></img>
  );
};

export default WatchList;
