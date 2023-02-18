// https://api.themoviedb.org/3/movie/550?api_key=f8293dad30f8a0ae553bd7bee540fd13

import axios from 'axios';

const AUTH_TOKEN = 'f8293dad30f8a0ae553bd7bee540fd13';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: AUTH_TOKEN,
};

const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/week');
  return response.data;
};

const getMovieByID = async id => {
  const response = await axios.get(`/movie/${id}`);

  return response.data;
};

const getMoviesByQuerySearch = async query => {
  const response = await axios.get('/search/movie', {
    params: {
      query: query,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

const getMovieCreditsByID = async id => {
  const response = await axios.get(`/movie/${id}/credits`);

  return response.data.cast;
};

const getMovieReviewsByID = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};

export {
  getTrendingMovies,
  getMovieByID,
  getMoviesByQuerySearch,
  getMovieCreditsByID,
  getMovieReviewsByID,
};
