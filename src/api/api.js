import axios from "axios";

const API_URL = "https://schema-reference-backend.onrender.com"; 
// Register a new user
export const registerUser = async (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};

// Login and get JWT token
export const loginUser = async (userData) => {
    return axios.post(`${API_URL}/login`, userData);
};

// Create a new post (Authenticated)
export const createPost = async (postData, token) => {
    return axios.post(`${API_URL}/posts`, postData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

// Get all posts
export const getPosts = async () => {
    return axios.get(`${API_URL}/posts`);
};
