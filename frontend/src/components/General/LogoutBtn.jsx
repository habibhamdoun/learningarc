import { logout } from '../../../../backend/controllers/authController.js';

const LogoutBtn = () => {
  const handlelogout = () => {
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handlelogout} className='btn bg-red-500 text-white'>
      Log Out
    </button>
  );
};

export default LogoutBtn;
