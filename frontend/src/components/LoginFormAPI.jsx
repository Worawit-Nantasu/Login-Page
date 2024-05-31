import axios from 'axios';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
