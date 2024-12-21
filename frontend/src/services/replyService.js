import axios from 'axios';

const API_URL_REPLY = 'http://localhost:5000/api/replies';

export const getRepliesByCommentID = async (commentID) => {
  try {
    const response = await axios.get(`${API_URL_REPLY}/comment/${commentID}`);
    console.log('response.data');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching replies:', error.response || error.message);
    throw error;
  }
};
console.log('replyService loaded');

export const addReply = async (replyData) => {
  try {
    console.log('Sending Reply Data:', replyData);
    const response = await axios.post(API_URL_REPLY, replyData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response:', response);
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error.response?.data || error.message);
    throw error;
  }
};
