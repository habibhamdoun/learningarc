import PropTypes from 'prop-types';

const AboutCard = ({ imgSrc, text, btnText, btnClass }) => {
  return (
    <div className='card bg-base-100 image-full w-[30vw] min-w-96 shadow-xl'>
      <figure>
        <img src={imgSrc} alt='picture' />
      </figure>
      <div className='card-body justify-center gap-6 items-center'>
        <h2 className='card-title text-4xl'>{text?.toUpperCase()}</h2>
        <div className='card-actions justify-center'>
          <button className={`btn  text-xl rounded-3xl px-6 ${btnClass} `}>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
AboutCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
};

export default AboutCard;
