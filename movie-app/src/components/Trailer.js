import YouTube, { videoId } from "react-youtube";
import { useFetch } from "../hooks/useFetch";
import Error from "./Error";
import Loading from "./Loading";

export default function Trailer({ movieId }) {
  const getTrailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US`;
  const { loading, error, data } = useFetch(getTrailerUrl);
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  if (error) {
    return <Error text="Movie details can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  console.log(data.results);
  const trailerIds = data.results
    .filter((result) => result.type === "Trailer")
    .map((result) => result.key);

  if (trailerIds.length > 0) {
    return (
      <div className="width-100">
        <YouTube videoId={trailerIds[0]} opts={opts} onReady={onPlayerReady} />
      </div>
    );
  }
}
