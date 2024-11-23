import CourseCard from '../General/CourseCard';
import course1 from '../../assets/course1.jpg';
import course2 from '../../assets/course2.jpg';
import course3 from '../../assets/course3.jpg';
import course4 from '../../assets/course4.jpg';
import course5 from '../../assets/course5.jpg';
// import { useScreenSize } from '../../hooks';

const CoursesSection = () => {
  const courses = [
    {
      imgSrc: course1,
      title: 'Electronics 1',
      desc: 'This is an electronics course given by this instructor',
      instructor: 'Harag Hammoud',
    },
    {
      imgSrc: course2,
      title: 'Civil Engineering',
      desc: 'Learn the fundamentals of civil engineering and structures with practical examples.',
      instructor: 'Alice Johnson',
    },
    {
      imgSrc: course3,
      title: 'Introduction to Python',
      desc: 'Master Python basics in this comprehensive beginner course.',
      instructor: 'Mark Peterson',
    },
    {
      imgSrc: course4,
      title: 'Machine Learning Basics',
      desc: 'Explore the fundamentals of machine learning with real-world examples.',
      instructor: 'Sophia Lee',
    },
    {
      imgSrc: course5,
      title: 'Circuit Design Fundamentals',
      desc: 'Learn how to design and analyze electrical circuits.',
      instructor: 'James Becker',
    },
  ];
  //   const isMobile = useScreenSize();
  return (
    <main className='px-11 text-center md:text-start'>
      <div>
        <h2 className='text-4xl font-semibold p-6 text-primary '>
          Popular Courses
        </h2>
      </div>

      <div className='flex md:justify-start justify-center items-center gap-3 flex-wrap'>
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.title + course.instructor}
              title={course.title}
              desc={course.desc}
              instructor={course.instructor}
              imgSrc={course.imgSrc}
            />
          );
        })}
      </div>
    </main>
  );
};

export default CoursesSection;
