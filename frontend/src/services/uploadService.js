import axios from 'axios';

const API_URL = 'http://localhost:5000/api/videos';

export const addVideo = async (formData) => {
  console.log(formData);

  try {
    const response = await axios.post(`${API_URL}/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding video:', error);
    throw error;
  }
};
