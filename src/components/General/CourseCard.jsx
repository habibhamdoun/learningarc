import PropTypes from 'prop-types';
import calendar from '../../assets/calendarIcon2.svg';

const CourseCard = ({ imgSrc, title, desc, instructor, date, width }) => {
  return (
    <div className={`card bg-base-100 ${width} shadow-xl`}>
      <figure>
        <img src={imgSrc} alt='Course' />
      </figure>
      <div className='card-body items-center md:items-stretch'>
        <h2 className='card-title md:text-xl text-base '>{title}</h2>
        <div className='flex justify-between gap-3 '>
          <p className='italic text-gray-500 md:text-base text-sm flex-grow-0'>
            {instructor}
          </p>
          <div className='flex gap-1 items-center justify-center'>
            <img src={calendar} alt='' className='w-4 h-4 md:block hidden' />
            <p className='flex-grow-0 opacity-65 md:text-base text-sm'>
              {date}
            </p>
          </div>
        </div>

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
  date: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
export default CourseCard;
