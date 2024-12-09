import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import coursesData from '../../../data.json';
import LessonsDD from './LessonsDD';
import Profile from '../General/Profile';
import calendar from '../../assets/calendarIcon2.svg';
import playIcon from '../../assets/playIcon.svg';

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [instructor, setInstructor] = useState(null);
  const [loadingInstructor, setLoadingInstructor] = useState(true);

  useEffect(() => {
    const selectedCourse = coursesData.courses.find(
      (course) => course.course_id === parseInt(courseId),
    );
    setCourse(selectedCourse);
    console.log(selectedCourse);
  }, [courseId]);
  useEffect(() => {
    const selectedLessons = coursesData.lessons.filter((lesson) =>
      course?.lessons.includes(lesson.lesson_id),
    );
    setLessons(selectedLessons);
  }, [course, coursesData]);

  useEffect(() => {
    const selectedInstructor = coursesData.instructors.find(
      (instructor) => course?.instructor_id == instructor.instructor_id,
    );
    setInstructor(selectedInstructor);
    if (selectedInstructor) {
      setLoadingInstructor(false);
    }
    console.log('selectedInstructor');
    console.log(selectedInstructor);
  }, []);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='px-11 py-10'>
      <div className='flex flex-col lg:flex-row gap-7'>
        <a
          href={`/course/${course.course_id}/lesson/${course.lessons[0]}`}
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
              alt=''
              className='w-16 h-16 hover:scale-110 transition-transform duration-300'
            />
          </div>
        </a>
        <div className='flex flex-col gap-10 lg:w-1/2'>
          <h3 className='md:text-6xl text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient-reverse py-3'>
            {course.title}
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
          <p className='w-full lg:text-xl'>{course.longDesc}</p>

          <div className='flex gap-1 items-center'>
            <img src={calendar} alt='' className='w-4 h-4' />
            <p className='flex-grow-0 opacity-65 md:text-base text-sm'>
              {course.date}
            </p>
          </div>
        </div>
      </div>
      <div className='collapse lg:w-[48.5vw] w-full collapse-arrow bg-primary mt-5 text-white '>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-medium '>
          Lessons Included
        </div>
        <ol className='collapse-content list-decimal flex flex-col gap-3 pl-6'>
          {lessons.map((lesson) => (
            <div key={lesson} className='px-4'>
              <LessonsDD key={lesson} lesson={lesson} />
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Course;
