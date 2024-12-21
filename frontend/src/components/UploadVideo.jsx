import React, { useState } from 'react';
import { addVideo } from '../services/uploadService'; // Import Axios service
import { toast } from 'react-toastify'; // For notifications

const UploadVideo = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null); // File state

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Update file state
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
    formData.append('file', file); // Append file

    try {
      const response = await addVideo(formData); // Call Axios service
      toast.success(response.message); // Show success message
    } catch (error) {
      toast.error(error.response?.data?.error || 'Upload failed'); // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className='upload-form'>
      <div>
        <label>Description:</label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>File:</label>
        <input type='file' onChange={handleFileChange} required />
      </div>
      <button type='submit'>Upload Video</button>
    </form>
  );
};

export default UploadVideo;
