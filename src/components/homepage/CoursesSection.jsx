import coursesData from '../../../data.json';
import CoursesCarousel from '../CoursesPage/CoursesCarousel';

const CoursesSection = () => {
  return (
    <div className='overflow-x-hidden'>
      <CoursesCarousel
        title={'Popular Courses'}
        coursesData={coursesData.courses}
        width='w-96'
      />
    </div>
  );
};

export default CoursesSection;
