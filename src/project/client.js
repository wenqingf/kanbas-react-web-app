import axios from 'axios';

export const MOVIESTER_API = "https://api.themoviedb.org/3";
export const API_KEY = process.env.REACT_APP_MOVIESTER_API_KEY;

export const findMovies = async (searchTerm) => {
    const response = await axios.get(`${MOVIESTER_API}/search/movie?query=${searchTerm}&api_key=${API_KEY}`);
    return response.data.results;
};

export const findMovieById = async (movieId) => {
    const response = await axios.get(
        `${MOVIESTER_API}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
};

export const findVideosByMovieId = async (movieId) => {
    const response = await axios.get(
        `${MOVIESTER_API}/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    return response.data;
};
