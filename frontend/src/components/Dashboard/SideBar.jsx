import add_icon from '../../assets/add_icon.png';
import order_icon from '../../assets/order_icon.png';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const menuItems = [
    { to: '/admin/add', icon: add_icon, label: 'Add Courses' },
    { to: '/admin/lessons/add', icon: add_icon, label: 'Add Lessons' },
    { to: '/admin/list', icon: order_icon, label: 'List ' },
  ];

  return (
    <div className='fixed w-1/5 min-h-screen '>
      <div className='pt-4 pl-8 flex flex-col gap-5'>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className='flex items-center gap-3 p-2 rounded-l-md cursor-pointer border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-colors'
          >
            <img src={item.icon} alt={`${item.label} Icon`} />
            <p className='hidden md:block'>{item.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
