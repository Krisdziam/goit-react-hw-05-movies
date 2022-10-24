import axios from "axios";

const API_KEY = "3cd5ca2b87850020dae80128c26cb9e1";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export async function fetchFilms() {
  const response = await axios.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};


export async function fetchSearchFilms(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
}

export async function fetchInfo(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchReviews(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.results;
}

export async function fetchCredits(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.cast;
}



