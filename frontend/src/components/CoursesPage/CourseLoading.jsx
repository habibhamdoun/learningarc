import { useRef } from 'react';
import { motion } from 'motion/react';

const CoursesLoading = () => {
  const carouselRef = useRef(null);

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
      <div className='relative'>
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full shadow-md p-3 hover:bg-secondary transition-colors duration-300'
          onClick={() => scrollCarousel('left')}
        >
          ❮
        </button>
        <div className='skeleton h-8 w-28'></div>
        <motion.div
          initial={{ translateX: 300 }}
          whileInView={{ translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className='carousel bg-white carousel-center w-[95vw] rounded-box gap-8 p-4 overflow-x-scroll scroll-smooth'
          ref={carouselRef}
        >
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
          <div className='flex md:w-80 md:h-96 w-64 h-80 p-4 flex-col gap-4 carousel-item'>
            <div className='skeleton h-64 w-full'></div>
            <div className='skeleton h-8 w-28'></div>
            <div className='skeleton h-8 w-full'></div>
            <div className='skeleton h-8 w-full'></div>
          </div>
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

export default CoursesLoading;
