import PropTypes from 'prop-types';

const CourseCard = ({ imgSrc, title, desc, instructor }) => {
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={imgSrc} alt='Course' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-xl'>{title}</h2>
        <p className='italic text-gray-500'>{instructor}</p>
        <p>{desc}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Check it Out</button>
        </div>
      </div>
    </div>
  );
};
CourseCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
};
export default CourseCard;
