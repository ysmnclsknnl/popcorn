import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(`id ${id}`);

  const { loading, error, data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US`
  );
  if (error) {
    return <Error text="Product can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  console.log(`data.homepage is ${data.homepage}`);
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.original_title}</p>
      <p>{data.overview}</p>
      <p>{data.release_date}</p>
    </div>
  );
};

export default MovieDetail;
