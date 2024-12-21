import axios from 'axios';

export const addVideo = async (formData) => {
  try {
    // Send POST request with FormData
    const response = await axios.post('http://localhost:5000/api/videos/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Necessary for file uploads
      },
    });
    return response.data; // Return response data if successful
  } catch (error) {
    // Log and throw the error
    console.error('Axios Error:', error.response?.data || error.message);
    throw error; // Allow the caller to handle the error
  }
};
