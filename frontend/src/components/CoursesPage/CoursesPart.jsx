import { useEffect, useState } from 'react';
import CoursesCarousel from './CoursesCarousel';
// import coursesData from '../../../data.json';
import { getCourses } from '../../services/courseService';
import CourseLoading from './CourseLoading';

const CoursesPart = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchData();
    if (courses.length > 0) {
      setLoading(false);
    }
  }, [courses]);

  return (
    <div>
      <h2 className='px-11 text-primary font-semibold text-3xl py-3'>
        Check Out Courses
      </h2>
      {loading ? (
        <>
          <CourseLoading />
          <CourseLoading />
          <CourseLoading />
          <CourseLoading />
        </>
      ) : (
        <>
          <CoursesCarousel
            title='Popular'
            coursesData={courses}
            width={'w-[250px] md:w-[374px]'}
          />
          <CoursesCarousel
            title='Recent'
            coursesData={courses}
            width={'w-[250px] md:w-[374px]'}
          />
          <CoursesCarousel
            title='Most Watched'
            coursesData={courses}
            width={'w-[250px] md:w-[374px]'}
          />
        </>
      )}
    </div>
  );
};

export default CoursesPart;
