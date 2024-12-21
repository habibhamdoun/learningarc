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
      <a className='text-3xl flex items-center gap-3' href={'/about'}>
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
      <a className='text-3xl flex items-center gap-3' href={'/contact'}>
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
          Contact
        </li>
      </a>
      <div className='flex flex-col gap-2 mt-auto'>
        <a href='/auth?isLogin=true'>
          <button className='btn w-full  transition-all duration-300 btn-light rounded-3xl px-6 text-base'>
            Login
          </button>
        </a>
        <a href='/auth?isLogin=false'>
          <button className='btn w-full  transition-all duration-300 btn-secondary rounded-3xl px-6 text-base text-white hover:btn-primary'>
            Sign Up
          </button>
        </a>
      </div>
    </ul>
  );
};

export default Sidebar;
