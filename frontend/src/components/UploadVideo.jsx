import { useState } from 'react';
import { addVideo } from '../services/uploadService';
import { toast } from 'react-toastify';

const UploadVideo = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !date || !category || !file) {
      toast.error('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('description', description);
    formData.append('date', date);
    formData.append('category', category);
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await addVideo(formData);
      toast.success(response.message);

      setDescription('');
      setDate('');
      setCategory('');
      setFile(null);
    } catch (error) {
      toast.error(error.response?.data?.error || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='upload-form  p-4 bg-white rounded-lg shadow-md'
    >
      <div>
        <label className=' font-medium mb-2'>Description:</label>
        <input
          className='bg-white w-full p-2 rounded-md border shadow-md'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder='Enter video description'
        />
      </div>
      <div>
        <label className=' font-medium mb-2'>Date:</label>
        <input
          className='bg-white w-full p-2 rounded-md border shadow-md'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label className=' font-medium mb-2'>Category:</label>
        <input
          className='bg-white w-full p-2 rounded-md border shadow-md'
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          placeholder='Enter video category'
        />
      </div>
      <div>
        <label className=' font-medium mb-2'>File:</label>
        <input
          className='bg-white w-full p-2 rounded-md border shadow-md'
          type='file'
          onChange={handleFileChange}
          required
        />
      </div>
      <button
        type='submit'
        disabled={loading}
        className={`w-full p-3 rounded-md font-bold text-white ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Uploading...' : 'Upload Video'}
      </button>
    </form>
  );
};

export default UploadVideo;
