import PropTypes from 'prop-types';
import { removeTitles } from '../../../constants';

const Profile = ({ name, pic, description }) => {
  const cleanedName = removeTitles(name);
  return (
    <div className='flex gap-5'>
      {pic ? (
        <div className='avatar w-32 min-w-28'>
          <div className='ring-primary ring-offset-base-100 w-full rounded-full ring ring-offset-2'>
            <img src={pic} />
          </div>
        </div>
      ) : (
        <div className='avatar placeholder lg:w-20 w-44 min-w-28'>
          <div className='bg-neutral text-neutral-content w-full rounded-full'>
            <span className='text-3xl'>{cleanedName.charAt(0)}</span>
          </div>
        </div>
      )}
      <div>
        <p className='lg:text-2xl text-base font-semibold'>{name}</p>
        <p className='lg:w-3/4 w-full text-sm lg:text-base'>{description}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Profile;
