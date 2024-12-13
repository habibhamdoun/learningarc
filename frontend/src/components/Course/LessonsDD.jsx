import PropTypes from 'prop-types';

const LessonsDD = ({ lesson, watching }) => {
  return (
    <li className='list-item '>
      <div className='card card-compact bg-base-100 w-full '>
        <div className='card-body bg-primary shadow-none'>
          <div className='flex justify-between items-center w-full'>
            <h2 className='card-title text-lg'>{lesson.title}</h2>
            {watching && <p className='flex-grow-0 font-bold'>NOW WATCHING</p>}
          </div>
          <p>{lesson.description}</p>
          <p className='italic'>{lesson.date_posted}</p>
          <div className='card-actions justify-end'>
            <a href={`/course/${lesson.courseID}/lesson/${lesson.lessonID}`}>
              <button className='btn text-white btn-secondary'>
                Check Out
              </button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
LessonsDD.propTypes = {
  title: PropTypes.string.isRequired,
  lesson: PropTypes.object.isRequired,
  watching: PropTypes.bool.isRequired,
};
export default LessonsDD;
