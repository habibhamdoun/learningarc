import { useRef } from 'react';
import CourseCard from '../General/CourseCard';
import course1 from '../../assets/course1.jpg';
import course2 from '../../assets/course2.jpg';
import course3 from '../../assets/course3.jpg';
import course4 from '../../assets/course4.jpg';
import course5 from '../../assets/course5.jpg';

const CoursesSection = () => {
  const carouselRef = useRef(null);
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

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -500 : 500,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className='mb-3 px-11 text-center md:text-start'>
      <div>
        <h2 className='text-4xl font-semibold p-6 text-primary '>
          Popular Courses
        </h2>
      </div>

      <div className='relative'>
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full shadow-md p-3 hover:bg-secondary transition-colors duration-300'
          onClick={() => scrollCarousel('left')}
        >
          ❮
        </button>

        <div
          className='carousel bg-white carousel-center w-[90vw] rounded-box gap-4 p-4 overflow-x-scroll scroll-smooth'
          ref={carouselRef}
        >
          {courses.map((course) => {
            return (
              <div
                className='carousel-item'
                key={course.title + course.instructor}
              >
                <CourseCard
                  title={course.title}
                  desc={course.desc}
                  instructor={course.instructor}
                  imgSrc={course.imgSrc}
                />
              </div>
            );
          })}
        </div>

        <button
          className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full shadow-md p-3 hover:bg-secondary transition-colors duration-300'
          onClick={() => scrollCarousel('right')}
        >
          ❯
        </button>
      </div>
    </main>
  );
};

export default CoursesSection;
