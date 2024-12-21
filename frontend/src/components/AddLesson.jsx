import { useState } from 'react';
import SideBar from './Dashboard/SideBar';

const AddLesson = () => {
  const [message, setMessage] = useState('');
  const [lessons, setLessons] = useState([]);
  const [lessonData, setLessonData] = useState({
    title: '',
    description: '',
    duration: '',
  });
  const handleLessonChange = (e) => {
    const { name, value } = e.target;
    setLessonData({
      ...lessonData,
      [name]: value,
    });
  };

  const addLesson = () => {
    if (!lessonData.title || !lessonData.description || !lessonData.duration) {
      setMessage('Please fill in all lesson fields before adding.');
      return;
    }

    setLessons([...lessons, lessonData]);
    setLessonData({
      title: '',
      description: '',
      duration: '',
    });
    setMessage('Lesson added successfully!');
  };

  return (
    <>
      <SideBar />
      <div className='mt-6 w-[100vw] flex  justify-center h-[100vh]'>
        <div className='flex flex-col items-center w-[60vw] gap-4'>
          <div className='flex flex-col'>
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
            <h3 className='text-lg font-bold'>Add Lessons</h3>
          </div>
          <div className='w-1/2'>
            <label htmlFor='lessonTitle' className='block font-medium'>
              Lesson Title
            </label>
            <input
              type='text'
              id='lessonTitle'
              name='title'
              value={lessonData.title}
              onChange={handleLessonChange}
              className='w-full mt-2 p-3 border rounded-md bg-white shadow-md'
              placeholder='Enter lesson title'
              required
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor='lessonDescription' className='block font-medium'>
              Lesson Description
            </label>
            <textarea
              id='lessonDescription'
              name='description'
              value={lessonData.description}
              onChange={handleLessonChange}
              className='w-full mt-2 p-3 border rounded-md bg-white shadow-md'
              rows='2'
              placeholder='Enter lesson description'
              required
            ></textarea>
          </div>
          <div className='w-1/2'>
            <label htmlFor='lessonDuration' className='block font-medium'>
              Lesson Duration (in minutes)
            </label>
            <input
              type='number'
              id='lessonDuration'
              name='duration'
              value={lessonData.duration}
              onChange={handleLessonChange}
              className='w-full mt-2 p-3 border rounded-md bg-white shadow-md'
              placeholder='Enter lesson duration'
              required
            />
          </div>
          <button
            type='button'
            onClick={addLesson}
            className='px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition'
          >
            Add Lesson
          </button>
        </div>
      </div>
    </>
  );
};

export default AddLesson;
