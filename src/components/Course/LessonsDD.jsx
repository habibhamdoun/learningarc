import PropTypes from 'prop-types';

const LessonsDD = ({ lesson }) => {
  return (
    <li className='list-item '>
      <div className='card card-compact bg-base-100 w-full '>
        {/* <figure><img src={lesson.thumbnail} alt='Shoes' /></figure> */}
        <div className='card-body bg-primary shadow-none'>
          <h2 className='card-title text-lg'>{lesson.title}</h2>
          <p>{lesson.description}</p>
          <p className='italic'>{lesson.date_posted}</p>
          <div className='card-actions justify-end'>
            <a href={`/course/${lesson.course_id}/lesson/${lesson.lesson_id}`}>
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
};
export default LessonsDD;
