import NavBar from './NavBar';
import Sidebar from './Sidebar';

const Nav = () => {
  return (
    <div className='drawer sticky top-0 z-[99]'>
      <input id='mobile-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <NavBar />
      </div>
      <div className='drawer-side'>
        <label htmlFor='mobile-drawer' className='drawer-overlay'></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default Nav;
