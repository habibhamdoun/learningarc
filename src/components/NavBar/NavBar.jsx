import logo from '../../assets/logo.png';
import burgerIcon from '../../assets/burgerIcon.svg';
import { useScreenSize } from '../../hooks';
import Navlist from './Navlist';
import { motion } from 'motion/react';

const NavBar = () => {
  const { isMobile } = useScreenSize();

  return (
    <motion.div
      className='flex items-center justify-between w-[100vw] bg-primary px-11'
      initial={{ translateY: -300 }}
      animate={{ translateY: 0 }}
      transition={{ duration: isMobile ? 0.25 : 0.4 }}
    >
      <a href='/'>
        <img
          src={logo}
          alt='learning arc logo'
          className='md:w-[7vw] w-[18vw]'
        />
      </a>
      {isMobile ? (
        <label
          htmlFor='mobile-drawer'
          aria-label='open sidebar'
          className='hover:bg-[#00000040] mt-2 rounded-lg transition-all duration-300 sm:w-16 w-12 flex items-center justify-center'
        >
          <img src={burgerIcon} alt='burger icon' className='w-[100%]' />
        </label>
      ) : (
        <Navlist />
      )}
    </motion.div>
  );
};

export default NavBar;
