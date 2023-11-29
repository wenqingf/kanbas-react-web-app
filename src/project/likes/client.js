import axios from "axios";

const API_BASE = "http://localhost:4000/api";

const USERS_API = `${API_BASE}/users`;
const LIKES_API = `${API_BASE}/likes`;

export const findAllLikes = async () => {};
export const createUserLikesMovie = async (userId, movieId) => {
    const response = await axios.post(`${USERS_API}/${userId}/likes/${movieId}`);
    return response.data;
};
export const deleteUserLikesMovie = async (userId, movieId) => {};
export const findUsersThatLikeMovie = async (movieId) => {
    const response = await axios.get(`${LIKES_API}/${movieId}/users`);
    return response.data;
};
export const findMoviesThatUserLikes = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}/likes`);
    return response.data;
};
