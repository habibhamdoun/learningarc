import PropTypes from 'prop-types';
import Profile from '../General/Profile';
import ReplyDD from './ReplyDD';
import { addReply, getRepliesByCommentID } from '../../services/replyService';
import { useEffect, useState } from 'react';

const Comment = ({ comment }) => {
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const data = await getRepliesByCommentID(parseInt(comment.commentID));
        setReplies(data);
        console.log(comment.commentID);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (comment) {
      fetchReplies();
    }
  }, [comment]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit for Reply triggered');

    const replyData = {
      parentCommentID: parseInt(comment.commentID),
      studentID: 1, // TODO: fix this
      courseID: parseInt(comment.courseID),
      content: newReply,
      commenter: 'Habib', //TODO: fix this
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
      <Profile name={comment.commenter} small={true} />
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
