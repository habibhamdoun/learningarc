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
  const [instructor, setInstructor] = useState(null);
  const [loadingInstructor, setLoadingInstructor] = useState(true);

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
      <div className='collapse lg:w-[48.5vw] w-full collapse-arrow bg-primary mt-5 text-white '>
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
    </div>
  );
};

export default Lesson;
