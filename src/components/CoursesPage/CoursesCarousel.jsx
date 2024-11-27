import { useEffect, useRef, useState } from 'react';
import CoursesRow from './CoursesRow';
import { motion } from 'motion/react';
import Proptypes from 'prop-types';
import { useScreenSize } from '../../hooks';

const CoursesCarousel = ({ title, coursesData, width }) => {
  const carouselRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const { isMobile } = useScreenSize();
  useEffect(() => {
    const fetchData = () => {
      setCourses(coursesData);
    };

    fetchData();
    console.log(courses);
  }, [coursesData]);

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
        <h2 className='md:text-4xl text-2xl font-semibold p-6 text-primary '>
          {title}
        </h2>
      </div>

      <div className='relative'>
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full shadow-md p-3 hover:bg-secondary transition-colors duration-300'
          onClick={() => scrollCarousel('left')}
        >
          ❮
        </button>

        <motion.div
          initial={{ translateX: isMobile ? 0 : 200 }}
          whileInView={{ translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className='carousel bg-white carousel-center w-[95vw] rounded-box gap-4 p-4 overflow-x-scroll scroll-smooth'
          ref={carouselRef}
        >
          <CoursesRow courses={courses} isCarousel={true} width={width} />
        </motion.div>

        <button
          className='absolute right-[-20px]  top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full shadow-md p-3 hover:bg-secondary transition-colors duration-300'
          onClick={() => scrollCarousel('right')}
        >
          ❯
        </button>
      </div>
    </main>
  );
};

CoursesCarousel.propTypes = {
  title: Proptypes.string.isRequired,
  width: Proptypes.string.isRequired,
  coursesData: Proptypes.array.isRequired,
};

export default CoursesCarousel;
