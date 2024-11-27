import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const LeftSided = ({ imageSrc, headingText, paragraphText }) => {
  return (
    <div className='hero bg-white py-12'>
      <div className='hero-content flex-col lg:flex-row items-center lg:space-x-12'>
        <motion.img
          initial={{ translateX: -300 }}
          whileInView={{ translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          src={imageSrc}
          alt='Left Sided Content'
          className='max-w-lg w-[70vw] rounded-lg'
        />

        <motion.div
          initial={{ translateX: 300 }}
          whileInView={{ translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className='text-center lg:text-left'
        >
          <h1 className='md:text-4xl text-2xl font-bold text-primary leading-tight'>
            {headingText}
          </h1>
          <p className='py-4 text-gray-600 md:text-lg text-base leading-relaxed p-1'>
            {paragraphText}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
LeftSided.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
};
export default LeftSided;
