import { API_KEY, API_BASE_URL } from "../constants";

export const getMovieSearchUrl = (query, page) =>
  `${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

export const getMovieDetailUrl = (id) =>
  `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
