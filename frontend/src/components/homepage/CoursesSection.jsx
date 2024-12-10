import CoursesCarousel from '../CoursesPage/CoursesCarousel';
import { getCourses } from '../../services/courseService';
import { useEffect, useState } from 'react';
const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
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
    // console.log(courses);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <CoursesCarousel
        title={'Popular Courses'}
        coursesData={courses}
        width='w-96'
      />
    </div>
  );
};

export default CoursesSection;
