import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LessonsDD from './LessonsDD';
import Profile from '../General/Profile';
import calendar from '../../assets/calendarIcon2.svg';
import playIcon from '../../assets/playIcon.svg';
import { getCourse } from '../../services/courseService';
import { getInstructorByCourse } from '../../services/instructorService';
import { getLessonByCourseID } from '../../services/lessonService';

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loadingCourse, setLoadingCourse] = useState(true);
  const [lessons, setLessons] = useState([]);
  const [instructor, setInstructor] = useState(null);
  const [loadingInstructor, setLoadingInstructor] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourse(courseId);
        setCourse(data);
      } catch (error) {
        console.error('Failed to fetch course:', error);
      } finally {
        setLoadingCourse(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const data = await getLessonByCourseID(courseId);
        setLessons(data);
      } catch (error) {
        console.error('Failed to fetch lessons:', error);
      }
    };

    if (course) {
      fetchLessons();
    }
  }, [course, courseId]);

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const data = await getInstructorByCourse(courseId);
        setInstructor(data);
      } catch (error) {
        console.error('Failed to fetch instructor:', error);
      } finally {
        setLoadingInstructor(false);
      }
    };

    if (course) {
      fetchInstructor();
    }
  }, [course, courseId]);

  if (loadingCourse) {
    return (
      <div className='flex w-full justify-center'>
        <span className='loading loading-infinity w-20'></span>
      </div>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='px-11 py-10'>
      <div className='flex flex-col lg:flex-row gap-7'>
        <a
          href={
            lessons && lessons.length > 0
              ? `/course/${course.courseID}/lesson/${lessons[0].lessonID}`
              : '#'
          }
          className='relative box-border p-0'
        >
          <img
            src={course.thumbnail}
            alt='thumbnail'
            className='p-0 lg:w-[50vw] w-[100vw] rounded-lg shadow-2xl lg:h-[30vw] h-[50vw] '
          />
          <div className='absolute top-0 bg-[#00000060] z-20 w-full h-full'></div>
          <div className='absolute top-1/2 left-1/2 z-30 bg-[#00000040] p-5 rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-300'>
            <img
              src={playIcon}
              alt='play button'
              className='w-16 h-16 hover:scale-110 transition-transform duration-300'
            />
          </div>
        </a>
        <div className='flex flex-col gap-10 lg:w-1/2'>
          <h3 className='md:text-6xl text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient-reverse py-3'>
            {course.title}
          </h3>
          <div>
            {!loadingInstructor && instructor ? (
              <Profile
                name={instructor.username}
                pic={''}
                description={instructor.description}
              />
            ) : (
              <div>Loading instructor...</div>
            )}
          </div>
          <p className='w-full lg:text-xl'>{course.longDesc}</p>

          <div className='flex gap-1 items-center'>
            <img src={calendar} alt='calendar icon' className='w-4 h-4' />
            <p className='flex-grow-0 opacity-65 md:text-base text-sm'>
              {course.date.split('T')[0]}
            </p>
          </div>
        </div>
      </div>
      <div className='collapse lg:w-[48.5vw] w-full collapse-arrow bg-primary mt-5 text-white '>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-medium'>
          Lessons Included
        </div>
        <ol className='collapse-content list-decimal flex flex-col gap-3 pl-6'>
          {/* {console.log(lessons)} */}
          {lessons.length === 0 ? (
            <div className='flex w-full justify-center'>
              <span className='loading loading-infinity w-20'></span>
            </div>
          ) : (
            lessons.map((lesson) => (
              <div key={lesson.lessonID} className='px-4'>
                <LessonsDD lesson={lesson} watching={false} />
              </div>
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default Course;
