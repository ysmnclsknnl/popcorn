export const API_KEY = "9d3f54e45d879086ab5584cbe37cd1cd";
export const API_BASE_URL = "https://api.themoviedb.org/3";

export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const HOMEPAGE_URL = {
  popular: `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
