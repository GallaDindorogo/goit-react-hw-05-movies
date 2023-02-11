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

export { getTrendingMovies };
