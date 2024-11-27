import { useLocation } from 'react-router-dom';

const Navlist = () => {
  const list = ['Home', 'Courses', 'About', 'Careers', 'Blog'];
  const url = useLocation();
  // console.log(url);
  return (
    <div className='flex gap-16 justify-around items-center  '>
      {list.map((item) => {
        return (
          <a
            href={'/' + item.replaceAll(' ', '').toLowerCase()}
            className={`text-white text-xl  border-secondary rounded-sm transition-all duration-100 ${
              url.pathname != '/' + item.replaceAll(' ', '').toLowerCase()
                ? 'hover:border-b-[3px]'
                : 'font-bold'
            }`}
            key={item}
          >
            {item}
          </a>
        );
      })}
      <div className='flex gap-2'>
        <a href='/auth?isLogin=true'>
          <button className='btn btn-light transition-all duration-300 rounded-3xl px-6 text-base'>
            Login
          </button>
        </a>
        <a href='/auth?isLogin=false'>
          <button className='btn btn-secondary transition-all duration-300 rounded-3xl px-6 text-base text-white hover:btn-primary'>
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navlist;
