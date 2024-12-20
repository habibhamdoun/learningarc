import { useState } from 'react';
import { addVideo } from '../services/uploadService';

const UploadVideo = () => {
  const [formData, setFormData] = useState({
    description: '',
    date: '',
    category: '',
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('description', formData.description);
    uploadData.append('date', formData.date);
    uploadData.append('category', formData.category);
    uploadData.append('image', file); // The field name "image" must match the backend

    setLoading(true);
    setMessage('');

    try {
      const response = await addVideo(uploadData); // Call the Axios service
      setMessage(response.message);
    } catch (error) {
      setMessage('Error uploading video.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='upload-video'>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Description:</label>
          <input
            type='text'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            placeholder='Enter video description'
            required
          />
        </div>
        <div className='form-group'>
          <label>Date:</label>
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Category:</label>
          <input
            type='text'
            name='category'
            value={formData.category}
            onChange={handleInputChange}
            placeholder='Enter category'
            required
          />
        </div>
        <div className='form-group'>
          <label>Video File:</label>
          <input
            type='file'
            name='image'
            accept='video/*'
            onChange={handleFileChange}
            required
          />
        </div>
        <button type='submit' disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {message && <p className='message'>{message}</p>}
    </div>
  );
};

export default UploadVideo;
