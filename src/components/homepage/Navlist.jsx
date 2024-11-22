const Navlist = () => {
  const list = ['Home', 'Courses', 'About Us', 'Careers', 'Blog'];

  return (
    <div className='flex gap-5 w-[80%] justify-around items-center'>
      {list.map((item) => {
        return (
          <a
            href={'/' + item.replaceAll(' ', '').toLowerCase()}
            className={`text-white text-xl  border-secondary rounded-sm transition-all duration-100 hover:border-b-[3px]`}
            key={item}
          >
            {item}
          </a>
        );
      })}
      <div className='flex gap-2'>
        <button className='btn btn-light rounded-3xl px-6 text-base'>
          Login
        </button>
        <button className='btn btn-secondary rounded-3xl px-6 text-base text-white hover:btn-primary'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navlist;
