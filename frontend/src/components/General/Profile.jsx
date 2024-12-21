import PropTypes from 'prop-types';
import { removeTitles } from '../../../constants';
import { useEffect, useState } from 'react';

const Profile = ({ name, pic, description, small }) => {
  const [randomColor, setRandomColor] = useState('bg-blue-500');
  const cleanedName = removeTitles(name);

  useEffect(() => {
    const getRandomTailwindColor = () => {
      const colors = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-teal-500',
        'bg-orange-500',
      ];

      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };
    setRandomColor(getRandomTailwindColor());
  }, []);
  return (
    <div className='flex gap-5'>
      {pic != '' ? (
        <div className='avatar w-28'>
          <div className='ring-primary ring-offset-base-100 w-full rounded-full ring ring-offset-2'>
            <img src={pic} />
          </div>
        </div>
      ) : (
        <div
          className={`avatar placeholder lg:w-20 w-44 ${
            small ? 'max-w-10' : 'max-w-28'
          }`}
        >
          <div
            className={`${randomColor} text-neutral-content w-full rounded-full`}
          >
            <span className={`${small ? 'text-base' : 'text-3xl'}`}>
              {cleanedName.charAt(0)}
            </span>
          </div>
        </div>
      )}
      <div>
        <p className='lg:text-2xl text-base font-semibold'>{name}</p>
        {description && (
          <p className='lg:w-3/4 w-full text-sm lg:text-base'>{description}</p>
        )}
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string,
  description: PropTypes.string,
  small: PropTypes.bool,
};
export default Profile;
