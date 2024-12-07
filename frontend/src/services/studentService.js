import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Add a new student
export const addStudent = async (studentData) => {
  try {
    const response = await axios.post(`${API_URL}/students`, studentData);
    return response.data;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};
