import logo from '../../assets/logo.png';
import Navlist from './Navlist';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between w-[100vw] bg-primary px-11'>
      <div>
        <img src={logo} alt='learning arc logo' className='w-[13%]' />
      </div>
      <Navlist />
    </div>
  );
};

document.documentElement.setAttribute('data-theme', 'mytheme');
export default NavBar;
