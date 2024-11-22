import PropTypes from 'prop-types';

const HeroCard = ({ imgSrc, title, desc }) => {
  return (
    <main className='flex items-center pl-3  bg-[#ffffff98] py-4 rounded-lg min-w-60 max-h-18'>
      <div className='w-12'>
        <img src={imgSrc} alt='logo' className='w-[80%]' />
      </div>
      <div className='text-black text-sm'>
        <h4 className='font-semibold'>{title}</h4>
        <p>{desc}</p>
      </div>
    </main>
  );
};
HeroCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default HeroCard;
