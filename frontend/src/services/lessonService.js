import axios from 'axios';

const API_URL_LESSON = 'http://localhost:5000/api/lessons'; // Replace with your backend URL

// Lesson Services
export const getLessons = async () => {
  try {
    const response = await axios.get(`${API_URL_LESSON}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lessons:', error);
    throw error;
  }
};

export const getLesson = async (lessonID) => {
  try {
    const response = await axios.get(`${API_URL_LESSON}/${lessonID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lesson:', error);
    throw error;
  }
};

export const getLessonByCourseID = async (courseID) => {
  try {
    const response = await axios.get(`${API_URL_LESSON}/course/${courseID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lessons for course:', error);
    throw error;
  }
};
