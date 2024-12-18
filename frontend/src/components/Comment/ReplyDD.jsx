import { useState } from 'react';
import PropTypes from 'prop-types';

const ReplyDD = ({ replies }) => {
  const [visibleReplies, setVisibleReplies] = useState(3);

  const loadMoreReplies = () => {
    setVisibleReplies((prev) => prev + 3);
  };
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

  return (
    <div className='mt-4'>
      <div className='dropdown dropdown-hover'>
        <div
          tabIndex={0}
          role='button'
          className='btn btn-sm btn-outline btn-primary'
        >
          View Replies
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-50 menu p-1 shadow bg-base-100 rounded-box w-64'
        >
          {replies.length > 0 ? (
            replies.slice(0, visibleReplies).map((reply, index) => (
              <li key={index} className='p-1 border-b'>
                <p className='text-sm'>
                  <span className='font-bold'>{reply.commenter}:</span>{' '}
                  {reply.content}
                </p>
                <div className='flex justify-end gap-2'>
                  <p className='text-gray-500'>
                    {reply.datePosted.split('T')[0]}
                  </p>
                  <p className='text-gray-500'>
                    {formatTimeTo12Hour(reply.datePosted)}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p className='p-1'>No replies Found be the first to reply!</p>
          )}
          {visibleReplies < replies.length && (
            <li>
              <button
                className='btn btn-link text-blue-500 text-sm'
                onClick={loadMoreReplies}
              >
                Load More
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

ReplyDD.propTypes = {
  replies: PropTypes.arrayOf(
    PropTypes.shape({
      commenter: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReplyDD;
