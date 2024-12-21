import logo from '../../assets/logo.png';
import github from '../../assets/github.svg';
import linkedin1 from '../../assets/linkedin1.svg';
import linkedin2 from '../../assets/linkedin2.svg';
import gmail from '../../assets/gmailIcon.svg';

const Footer = () => {
  return (
    <main className='bg-[#252641] h-[30vh] flex flex-col justify-between items-center'>
      <div className='flex items-center justify-center gap-2'>
        <img src={logo} alt='logo' className='w-20 h-20' />
        <h3 className=' italic border-l-2 border-gray-500 text-white pl-2'>
          Learn, Build, Succeed
        </h3>
      </div>
      <h3 className='text-white italic'>Contact Us</h3>
      <div className='flex gap-3'>
        <a href='https://www.linkedin.com/in/habibhamdoun/'>
          <img src={linkedin1} alt='' className='w-8 h-8' />
        </a>
        <a href='https://www.linkedin.com/in/habibhamdoun/'>
          <img src={gmail} alt='' className='w-8 h-8' />
        </a>
        <a href='https://github.com/habibhamdoun/learningarc'>
          <img src={github} alt='' className='w-8 h-8' />
        </a>
        <a href='https://www.linkedin.com/in/mohamad-marchud/'>
          <img src={linkedin2} alt='' className='w-8 h-8' />
        </a>
        <a href='https://www.linkedin.com/in/habibhamdoun/'>
          <img src={gmail} alt='' className='w-8 h-8' />
        </a>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-[#B2B3CF]'>
          Careers | Privacy Policy | Terms & Conditons
        </div>
        <div className='text-[#B2B3CF]'>© 2024 Class Technologies Inc.</div>
      </div>
    </main>
  );
};

export default Footer;
