import logo from '../../assets/logo.png';
import burgerIcon from '../../assets/burgerIcon.svg';
import { useScreenSize } from '../../hooks';
import Navlist from './Navlist';

const NavBar = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className='flex items-center justify-between w-[100vw] bg-primary px-11'>
      <a href='/'>
        <img
          src={logo}
          alt='learning arc logo'
          className='md:w-[7vw] w-[20vw]'
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
    </div>
  );
};

export default NavBar;
