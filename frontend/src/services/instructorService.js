import axios from 'axios';

const API_URL_INSTRUCTOR = 'http://localhost:5000/api/instructors'; // Replace with your backend URL

// Instructor Services

export const getInstructors = async () => {
  try {
    const response = await axios.get(`${API_URL_INSTRUCTOR}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching instructors:', error);
    throw error;
  }
};

export const getInstructor = async (teacherID) => {
  try {
    const response = await axios.get(`${API_URL_INSTRUCTOR}/${teacherID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching instructor:', error);
    throw error;
  }
};

export const getInstructorByCourse = async (courseID) => {
  if (!courseID) {
    throw new Error('CourseID is required');
  }

  try {
    const response = await axios.get(
      `${API_URL_INSTRUCTOR}/course/${courseID}`,
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching instructor for course ID ${courseID}:`,
      error.message || error,
    );
    throw error.response?.data || new Error('Failed to fetch instructor');
  }
};
