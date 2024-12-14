import axios from 'axios';

const API_URL_COMMENT = 'http://localhost:5000/api/comments';

export const getCommentByLessonID = async (courseID, lessonID) => {
  try {
    const response = await axios.get(
      `${API_URL_COMMENT}/course/${courseID}/lesson/${lessonID}`,
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching comments for lesson:',
      error.response || error.message,
    );
    throw error;
  }
};
