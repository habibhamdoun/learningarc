import logo from '../../assets/logo.png';
import profileIcon from '../../assets/profileicon.png';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <img className='w-20' src={logo} alt='Logo' />
      <img className='w-10' src={profileIcon} alt='Profile Icon' />
    </div>
  );
};

export default NavBar;
