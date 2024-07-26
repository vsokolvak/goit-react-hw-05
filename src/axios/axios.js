import axios from "axios";
import { TOKEN } from "../apiInfo/apiKey";
import { Routes } from 'react-router-dom';

const options = {
  headers: {
    accept: "application/json",
    Authorization: TOKEN,
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const getTrendingMovie = async () => {
    const response = await axios.get("movie/popular", options);
    return response.data.results
}

export const getFIlmsByName = async (query) => {

  const response = await axios.get("search/movie", {
    ...options,
    params: {query},
  });

  return response.data.results
};

export const getFilmById = async (id) => {
  const response = await axios.get(`movie/${id}`, {
    ...options
  });

  return response.data
}

export const getCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits`, {
    ...options
  });

  return response.data.cast
}

export const getReview = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`, {
    ...options,
  });
  
  return response.data.results;
  
};
