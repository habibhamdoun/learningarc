import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from './Dashboard/SideBar';

const AddCourseForm = () => {
  const [thumbnailState, setThumbnailState] = useState('');

  function getRandomLink() {
    const links = [
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    ];
    if (links.length === 0) {
      throw new Error('No links available');
    }
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  }

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    thumbnail: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const thumb = getRandomLink();
    setThumbnailState(thumb);
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      thumbnail: thumbnailState,
    }));
  }, [thumbnailState]);

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const payload = { ...formData };

      const response = await axios.post(
        'http://localhost:5000/api/courses',
        payload,
        config,
      );

      setMessage(response.data.message);
      setFormData({
        title: '',
        description: '',
        duration: '',
        thumbnail: thumbnailState,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || 'An unexpected error occurred';
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SideBar />
      <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Add New Course</h2>
        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              message.includes('successfully')
                ? 'bg-green-200 text-green-800'
                : 'bg-red-200 text-red-800'
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='title' className='block font-medium'>
              Course Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleCourseChange}
              className='w-full mt-2 p-3 border rounded-md bg-white'
              placeholder='Enter course title'
              required
            />
          </div>
          <div>
            <label htmlFor='description' className='block font-medium'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleCourseChange}
              className='w-full mt-2 p-3 border rounded-md bg-white'
              rows='4'
              placeholder='Enter course description'
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor='duration' className='block font-medium'>
              Duration (in hours)
            </label>
            <input
              type='number'
              id='duration'
              name='duration'
              value={formData.duration}
              onChange={handleCourseChange}
              className='w-full mt-2 p-3 border rounded-md bg-white'
              placeholder='Enter duration'
              required
            />
          </div>

          <button
            type='submit'
            className={`w-full p-3 text-white font-bold rounded-md ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary'
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Add Course'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
