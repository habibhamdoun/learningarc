import PropTypes from 'prop-types';
import CourseCard from '../General/CourseCard';

const CoursesRow = ({ courses, isCarousel, width }) => {
  console.log(courses);

  return (
    <>
      {courses.map((course) => {
        return (
          <div
            className={`${isCarousel ? 'carousel-item' : ''}`}
            key={course.course_id}
          >
            <CourseCard
              title={course.title}
              desc={course.description}
              instructor={course.instructor}
              date={course.date}
              imgSrc={course.thumbnail}
              width={width}
            />
          </div>
        );
      })}
    </>
  );
};
CoursesRow.propTypes = {
  courses: PropTypes.array.isRequired,
  isCarousel: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
};
export default CoursesRow;
