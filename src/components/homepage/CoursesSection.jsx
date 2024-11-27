import coursesData from '../../../data.json';
import CoursesCarousel from '../CoursesPage/CoursesCarousel';

const CoursesSection = () => {
  return (
    <>
      <CoursesCarousel
        title={'Popular Courses'}
        coursesData={coursesData.courses}
        width='w-96'
      />
    </>
  );
};

export default CoursesSection;
