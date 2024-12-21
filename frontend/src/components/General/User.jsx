import { useEffect, useState } from 'react';
import { getUserbyID } from '../../services/userService.js';

const User = () => {
  const [userID, setUserID] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch userID from localStorage
    const storedUserID = localStorage.getItem('userID');
    if (storedUserID) {
      setUserID(storedUserID);
    } else {
      setError('No user ID found in localStorage.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch user data if userID exists
    const fetchUser = async () => {
      setLoading(true);
      try {
        const data = await getUserbyID(userID);
        setUser(data);
        console.log('data');
        console.log(data);

        setError('');
      } catch (err) {
        console.log(err);

        setError('Failed to fetch user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (userID) {
      fetchUser();
    }
  }, [userID]);

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  return (
    <div className='user-container'>
      <div className='bg-primary'>
        <p>
          <strong>Signed in as:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default User;
