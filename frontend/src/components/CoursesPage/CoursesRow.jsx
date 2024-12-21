import PropTypes from 'prop-types';
import CourseCard from '../General/CourseCard';

const CoursesRow = ({ courses, isCarousel, width }) => {
  return (
    <>
      {courses.map((course) => {
        // console.log(course);

        return (
          <div
            className={`${isCarousel ? 'carousel-item' : ''}`}
            key={course.course_id}
          >
            <CourseCard
              id={course.courseID}
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
