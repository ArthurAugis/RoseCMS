// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
const API_KEY = import.meta.env.VITE_API_KEY; 

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/get_users`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
