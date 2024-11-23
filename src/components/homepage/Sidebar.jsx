import blog from '../../assets/blogIcon.svg';
import courses from '../../assets/coursesIcon.svg';

const Sidebar = () => {
  return (
    <ul className='menu bg-white min-h-full w-80 p-4 flex flex-col gap-8 text-primary pt-16'>
      <a className='text-3xl flex items-center gap-3' href={'/'}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
        <li className=' transition-transform duration-200 hover:translate-x-5'>
          Home
        </li>
      </a>
      <a className='text-3xl flex items-center gap-3' href={'/courses'}>
        <img src={courses} alt='courses icon' className='w-8 h-8' />
        <li className=' transition-transform duration-200 hover:translate-x-5'>
          Courses
        </li>
      </a>
      <a className='text-3xl flex items-center gap-3' href={'/'}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <li className=' transition-transform duration-200 hover:translate-x-5'>
          About
        </li>
      </a>
      <a className='text-3xl flex items-center gap-3' href={'/blog'}>
        <img src={blog} alt='' className='w-8 h-8' />
        <li className=' transition-transform duration-200 hover:translate-x-5'>
          Blog
        </li>
      </a>
      <a className='text-3xl flex items-center gap-3' href={'/carreers'}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
        <li className=' transition-transform duration-200 hover:translate-x-5'>
          Careers
        </li>
      </a>
      <div className='flex flex-col gap-2 mt-auto'>
        <button className='btn  transition-all duration-300 btn-light rounded-3xl px-6 text-base'>
          Login
        </button>
        <button className='btn  transition-all duration-300 btn-secondary rounded-3xl px-6 text-base text-white hover:btn-primary'>
          Sign Up
        </button>
      </div>
    </ul>
  );
};

export default Sidebar;
