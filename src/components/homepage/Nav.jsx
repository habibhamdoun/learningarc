import NavBar from './NavBar';
import Sidebar from './Sidebar';

const Nav = () => {
  return (
    <div className='drawer'>
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
