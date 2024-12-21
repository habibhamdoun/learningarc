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
    console.log(error);

    throw error;
  }
};
console.log('commentService loaded');

export const addComment = async (commentData) => {
  console.log('commentData');
  console.log(commentData);

  try {
    console.log('Sending Comment Data:', commentData);
    const response = await axios.post(
      'http://localhost:5000/api/comments',
      commentData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('Response:', response);
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error.response?.data || error.message);
    throw error;
  }
};
