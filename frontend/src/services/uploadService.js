import axios from 'axios';

export const addVideo = async (formData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/videos/add',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error.response?.data || error.message);
    throw error;
  }
};
