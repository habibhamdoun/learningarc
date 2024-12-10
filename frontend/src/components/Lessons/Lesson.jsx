import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import coursesData from '../../../data.json';
import LessonsDD from '../Course/LessonsDD';
import Profile from '../General/Profile';
import calendar from '../../assets/calendarIcon2.svg';
import ReactPlayer from 'react-player';

const Lesson = () => {
  const { lessonId } = useParams();

  const [lesson, setLesson] = useState(null);
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState('');
  const [instructor, setInstructor] = useState(null);
  const [loadingInstructor, setLoadingInstructor] = useState(true);

  //TODO:CHANGE THE COMMENT retreiving and ADDING + reply
  useEffect(() => {
    if (!lesson) return;
    setComments(lesson.comments);
  }, [lesson]);

  const handleAddComment = () => {
    if (newComment.trim() === '') return; // Prevent empty comments
    const newCommentData = {
      id: Date.now(),
      content: newComment,
      date: new Date().toLocaleString(),
    };
    setComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment(''); // Clear the input field
  };

  const handleAddReply = () => {};

  useEffect(() => {
    const selectedLesson = coursesData.lessons.find(
      (lesson) => lesson.lesson_id === parseInt(lessonId),
    );
    setLesson(selectedLesson);
    console.log('selectedLesson');
    console.log(selectedLesson);
  }, [lessonId]);

  useEffect(() => {
    if (!lesson) return;

    const selectedInstructor = coursesData.instructors.find(
      (instructor) => lesson.instructor_id === instructor.id,
    );
    setInstructor(selectedInstructor);
    if (selectedInstructor) {
      setLoadingInstructor(false);
    }
    console.log('selectedInstructor', selectedInstructor);
  }, [lesson]);

  useEffect(() => {
    const selectedCourse = coursesData.courses.find(
      (course) => course.course_id === lesson?.course_id,
    );
    console.log('selectedCourse');
    console.log(selectedCourse);
    setCourse(selectedCourse);
  }, [lesson]);
  useEffect(() => {
    if (!course) return;
    const selectedLessons = coursesData.lessons.filter((lesson) =>
      course?.lessons.includes(lesson.lesson_id),
    );
    setLessons(selectedLessons);
  }, [course]);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className='px-11 py-10'>
      <div className='flex flex-col lg:flex-row gap-7'>
        <ReactPlayer
          light={<img src={lesson.thumbnail} alt='Thumbnail' />}
          url={'https://www.w3schools.com/html/mov_bbb.mp4'}
          className='react-player'
          playing={false}
          controls
          width='100%'
          height='100%'
        />
        <div className='flex flex-col gap-10 lg:w-1/2'>
          <h3 className='md:text-6xl text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient-reverse py-3'>
            {lesson.title}
          </h3>
          <div>
            {!loadingInstructor ? (
              <Profile
                name={instructor.name}
                pic={instructor.profile_pic}
                description={instructor.description}
              />
            ) : (
              <div>loading</div>
            )}
          </div>
          <p className='w-full lg:text-xl'>{lesson.longDesc}</p>

          <div className='flex gap-1 items-center'>
            <img src={calendar} alt='' className='w-4 h-4' />
            <p className='flex-grow-0 opacity-65 md:text-base text-sm'>
              {lesson.date_posted}
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-baseline gap-3 justify-center flex-col '>
        <div className=' flex-grow-0 collapse lg:w-[48.5vw] w-full collapse-arrow bg-primary mt-5 text-white '>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium '>
            Additional Topics in This Course{' '}
          </div>
          <ol className='collapse-content list-decimal flex flex-col gap-3 pl-6'>
            {lessons.length == 0 ? (
              <div className='flex w-full justify-center'>
                <span className='loading loading-infinity w-20'></span>
              </div>
            ) : (
              lessons.map((lesson) => {
                return (
                  <div key={lesson} className='px-4'>
                    <LessonsDD
                      key={lesson}
                      lesson={lesson}
                      watching={lesson.lesson_id == lessonId}
                    />
                  </div>
                );
              })
            )}
          </ol>
        </div>
        <div className='mt-8 w-full'>
          <h2 className='text-2xl font-bold mb-4'>Comments</h2>
          {/* Display Comments */}
          <div className='flex flex-col gap-4 mb-6'>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className='p-4 bg-gray-100 rounded-md shadow-md'
                >
                  <div className='w-4'>
                    <Profile name={comment.commenter} small={true} />
                  </div>
                  <p className='text-sm text-gray-600'>{comment.date}</p>
                  <p className='mt-2'>{comment.content}</p>
                  <div className='flex gap-2 mt-3'>
                    <input
                      type='text'
                      placeholder='Add Reply'
                      className='input input-bordered input-primary t  ext-sm'
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                    />
                    <button
                      className='px-2 py-2 text-xs bg-primary text-white rounded-md hover:bg-blue-600 transition-colors duration-300'
                      onClick={handleAddReply}
                    >
                      Reply
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>
          <div className='flex gap-2'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-primary w-full'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className=' px-3 text-xs bg-primary text-white rounded-md hover:bg-blue-600 transition-colors duration-300'
              onClick={handleAddComment}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
