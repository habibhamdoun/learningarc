import axios from 'axios';

const API_URL_USER = 'http://localhost:5000/api/users';

export const getUserbyID = async (userID) => {
  if (!userID) {
    throw new Error('userID is required to fetch user data.');
  }
  try {
    const response = await axios.get(`${API_URL_USER}/${userID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
