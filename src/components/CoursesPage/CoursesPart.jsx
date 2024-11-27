import { useEffect, useState } from 'react';
import CoursesCarousel from './CoursesCarousel';
import coursesData from '../../../data.json';
import CourseLoading from './CourseLoading';
const CoursesPart = () => {
  const [courses, setCourses] = useState(coursesData.courses);
  const [users, setUsers] = useState(coursesData.users);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('Everything');
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesData.courses);
      setUsers(coursesData.users);
      setLoading(false);
    }, 2000);
  }, []);
  //TODO: add loading until loading
  const getCoursesByIds = (courseIds) =>
    courseIds.map((id) => courses.find((course) => course.course_id === id));

  // Assume the first user is logged in
  const loggedInUser = users.find((user) => user.user_id === 1);

  return (
    <div>
      <div className='w-full flex justify-center mt-2'>
        <div role='tablist' className='tabs tabs-boxed w-[60%] '>
          <a
            role='tab'
            onClick={() => {
              setTab('Everything');
            }}
            className={`tab ${tab == 'Everything' ? 'tab-active' : ''}`}
          >
            Everything
          </a>
          <a
            role='tab'
            onClick={() => {
              setTab('Playlists');
            }}
            className={`tab ${tab == 'Playlists' ? 'tab-active' : ''}`}
          >
            Playlists
          </a>
          <a
            role='tab'
            onClick={() => {
              setTab('Trending');
            }}
            className={`tab ${tab == 'Trending' ? 'tab-active' : ''}`}
          >
            Trending
          </a>
        </div>
      </div>
      {loading ? (
        <div className='flex flex-col'>
          <CourseLoading />
          <CourseLoading />
          <CourseLoading />
          <CourseLoading />
          <CourseLoading />
        </div>
      ) : (
        <>
          {tab != 'Trending' && (
            <div>
              <h2 className='px-11 text-primary font-semibold text-3xl md:text-3xl py-3'>
                Your Playlists
              </h2>
              {loggedInUser?.playlists.map((playlist) => (
                <CoursesCarousel
                  key={playlist.playlist_id}
                  title={playlist.name}
                  coursesData={getCoursesByIds(playlist.courses)}
                  width='w-[250px] md:w-[374px]'
                />
              ))}
            </div>
          )}
        </>
      )}
      {tab != 'Playlists' && (
        <>
          <h2 className='px-11 text-primary font-semibold text-3xl py-3'>
            Check Out
          </h2>
          <CoursesCarousel
            title='Popular'
            coursesData={courses}
            width={'w-[250px] md:w-[374px]'}
          />
          <CoursesCarousel
            title='Recent'
            coursesData={courses}
            width={'w-[250px] md:w-[374px]'}
          />
          <CoursesCarousel
            title='Most Watched'
            coursesData={courses}
            width={'w-[250px] md:w-[374px]'}
          />
        </>
      )}
    </div>
  );
};

export default CoursesPart;
