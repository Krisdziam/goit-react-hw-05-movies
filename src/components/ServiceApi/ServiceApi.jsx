import axios from "axios";

const API_KEY = "3cd5ca2b87850020dae80128c26cb9e1";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export async function fetchFilms() {
  const response = await axios.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};




