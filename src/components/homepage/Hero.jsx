import Bg from '../../assets/bg.png';
import HeroCard from './HeroCard';
import calendarIcon from '../../assets/calendarIcon.svg';
import messageIcon from '../../assets/messageIcon.svg';
import profileIcon from '../../assets/profileIcon.png';

const Hero = () => {
  return (
    <main className='bg-primary h-[90vh] px-11 flex items-center justify-between text-white gap-3 rounded-br-full '>
      <div className='w-[50%] flex flex-col gap-6'>
        <h2 className='text-6xl font-bold'>
          <span className='text-[#F48C06]'>Studying</span> Online is now much
          easier
        </h2>
        <p className='w-1/2'>
          Learning Arc is an interesting platform that will teach you in more
          interative way
        </p>
        <button className='btn btn-light rounded-3xl text-base w-1/4'>
          Join Us
        </button>
      </div>
      <div className='h-[100%] relative'>
        <img src={Bg} alt='nerdy girl thinking' className='h-[100%]' />
        <div className='absolute top-[30vh] left-0'>
          <HeroCard
            imgSrc={calendarIcon}
            title={'250K'}
            desc={'Assisted Students'}
          />
        </div>
        <div className='absolute top-[50vh] right-0'>
          <HeroCard
            imgSrc={messageIcon}
            title={'Congratulations'}
            desc={'Your admission completed'}
          />
        </div>
        <div className='absolute bottom-10'>
          <HeroCard
            imgSrc={profileIcon}
            title={'User Experience Class'}
            desc={'Today 12:00 AM'}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
