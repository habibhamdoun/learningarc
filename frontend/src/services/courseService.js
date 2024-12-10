import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses'; // Replace with your backend URL

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Add a new student
export const addCourse = async (courseData) => {
  try {
    const response = await axios.post(`${API_URL}`, courseData);
    return response.data;
  } catch (error) {
    console.error('Error adding course:', error);
    throw error;
  }
};

export const removeCourse = async (courseID) => {
  try {
    const response = await axios.delete(`${API_URL}/${courseID}`);
    return response.data;
  } catch (error) {
    console.error('Error removing course:', error);
    throw error;
  }
};
