import PropTypes from 'prop-types';
import Profile from '../General/Profile';
import ReplyDD from './ReplyDD';
import { addReply, getRepliesByCommentID } from '../../services/replyService';
import { useEffect, useState } from 'react';
import { getUserbyID } from '../../services/userService';

const Comment = ({ comment }) => {
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userID, setUserID] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch userID from localStorage
    const storedUserID = localStorage.getItem('userID');
    if (storedUserID) {
      setUserID(storedUserID);
    }
  }, []);

  useEffect(() => {
    // Fetch user data if userID exists
    const fetchUser = async () => {
      try {
        const data = await getUserbyID(userID);
        setUser(data);
        console.log('data');
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (userID) {
      fetchUser();
    }
  }, [userID]);

  const formatTimeTo12Hour = (dateTime) => {
    if (!dateTime) return '';

    const date = new Date(dateTime);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${hours}:${formattedMinutes} ${amPm}`;
  };
  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const data = await getRepliesByCommentID(parseInt(comment.commentID));
        setReplies(data);
        console.log('comment.commentID');
        console.log(comment.commentID);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (comment) {
      fetchReplies();
    }
  }, [comment, comment.commentID]);
  const handleSubmit = async (e) => {
    if (!user) {
      window.href = '/login';
    }
    e.preventDefault();
    console.log('handleSubmit for Reply triggered');
    console.log('comment.commentID');
    console.log(comment.commentID);

    const replyData = {
      parentCommentID: comment.commentID,
      userID: localStorage.getItem('userID'), // TODO: fix this
      courseID: parseInt(comment.courseID),
      content: newReply,
      commenter: user.username, //TODO: fix this
    };

    console.log('Prepared Reply Data:', replyData);

    if (!newReply.trim()) {
      console.log('Reply content is empty');
      setErrorMessage('Reply cannot be empty.');
      return;
    }

    try {
      console.log('Before calling addReply');
      const result = await addReply(replyData);
      console.log('After calling addReply', result);

      setReplies((prevReplies) => [...prevReplies, result.reply]);
      setNewReply('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setErrorMessage('Failed to add reply. Please try again.');
    }
  };

  return (
    <div
      key={comment.commentID}
      className='p-4 bg-gray-100 rounded-md shadow-md'
    >
      <div className='flex justify-between'>
        <div>
          <Profile name={comment.commenter} pic={''} small={true} />
          <p className='text-gray-500 italic'>
            {formatTimeTo12Hour(comment.datePosted)}
          </p>
        </div>
        <p className='text-gray-500 italic'>
          {comment.datePosted.split('T')[0]}
        </p>
      </div>
      <p className='mt-2'>{comment.content}</p>
      <div className='flex gap-2 mt-3'>
        <input
          type='text'
          placeholder='Add Reply'
          className='input input-bordered input-primary text-sm'
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className='px-2 py-2 text-xs bg-primary text-white rounded-md hover:bg-blue-600 transition-colors duration-300'
        >
          Reply
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <ReplyDD replies={replies} />
    </div>
  );
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
