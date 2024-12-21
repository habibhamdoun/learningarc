import CoursesCarousel from '../CoursesPage/CoursesCarousel';
import { getCourses } from '../../services/courseService';
import { useEffect, useState } from 'react';
import CourseLoading from '../CoursesPage/CourseLoading';
const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses();
        setCourses(data.slice(0, 5));
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
    <div className='overflow-x-hidden'>
      {loading ? (
        <div className='flex flex-col'>
          <CourseLoading />
        </div>
      ) : (
        <CoursesCarousel
          title={'Popular Courses'}
          coursesData={courses}
          width='w-96'
        />
      )}
    </div>
  );
};

export default CoursesSection;
