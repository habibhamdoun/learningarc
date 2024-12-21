import { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from './Dashboard/SideBar';
import UploadVideo from './UploadVideo';

const AddLesson = () => {
  const [message, setMessage] = useState('');
  const [lessons, setLessons] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [userID, setUserID] = useState(
    parseInt(localStorage.getItem('userID')),
  );

  const [lessonData, setLessonData] = useState({
    title: '',
    description: '',
    duration: '',
    videoID: 0,
  });

  useEffect(() => {
    setUserID(localStorage.getItem('userID'));
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!userID) {
        setMessage('User not logged in or missing user ID.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        const filteredCourses = response.data.filter(
          (course) => course.userID == parseInt(userID),
        );
        setCourses(filteredCourses);
        if (filteredCourses.length === 0) {
          setMessage('No courses found for this user.');
        }
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        setMessage('Failed to fetch courses. Please try again later.');
      }
    };

    fetchCourses();
  }, [userID]);

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };
  const handleLessonChange = (e) => {
    const { name, value } = e.target;

    const videoID = parseInt(localStorage.getItem('videoID')) || 0;

    setLessonData({
      ...lessonData,
      videoID: videoID,
      [name]: value,
    });
  };

  const addLesson = async () => {
    const videoID = parseInt(localStorage.getItem('videoID')) || 0;

    setLessonData({
      ...lessonData,
      videoID: videoID,
    });

    if (!selectedCourse) {
      setMessage('Please select a course before adding a lesson.');
      return;
    }
    if (!lessonData.title || !lessonData.description || !lessonData.duration) {
      setMessage('Please fill in all lesson fields before adding.');
      return;
    }

    try {
      const payload = {
        courseID: selectedCourse,
        ...lessonData,
      };

      console.log('payload', payload);

      const response = await axios.post(
        'http://localhost:5000/api/lessons',
        payload,
      );

      setLessons([...lessons, response.data]);
      setLessonData({
        title: '',
        description: '',
        duration: '',
        videoID: 0,
      });
      setMessage('Lesson added successfully!');
    } catch (error) {
      console.error('Failed to add lesson:', error);
      setMessage('Failed to add lesson. Please try again later.');
    }
  };

  return (
    <>
      <SideBar />
      <div className='mt-6 w-[100vw] flex justify-center h-[100vh]'>
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

          {/* Dropdown to select course */}
          <div className='w-1/2'>
            <label htmlFor='courseSelect' className='block font-medium'>
              Select Course
            </label>
            <select
              id='courseSelect'
              value={selectedCourse}
              onChange={handleCourseChange}
              className='w-full mt-2 p-3 border rounded-md bg-white shadow-md'
            >
              <option value='' disabled>
                Choose a course
              </option>
              {courses.map((course) => (
                <option key={course.courseID} value={course.courseID}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          {/* Lesson Title Input */}
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

          {/* Lesson Description Input */}
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

          {/* Lesson Duration Input */}
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

          <UploadVideo />

          {/* Add Lesson Button */}
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
