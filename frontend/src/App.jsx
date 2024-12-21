// import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar/Nav';
import Footer from './components/General/Footer';
// import AuthPage from './components/Login/AuthPage';
// import CoursesPart from './components/CoursesPage/CoursesPart';
// import HomePage from './components/homepage/HomePage';
// import AboutUs from './components/AboutUs/AboutUs';
// import Course from './components/Course/Course';
// import Contact from './components/Contact/Contact';
// import AdminPage from './components/Dashboard/AdminPage';
// import AddCourse from './components/Dashboard/pages/AddCourse';
// import Lesson from './components/Lessons/Lesson.jsx';
import UploadVideo from './components/UploadVideo.jsx';

function App() {
  return (
    <div>
      <Nav />
      {/* <Routes>
        <Route path={`/`} element={<Navigate to='/home' replace />} />
        <Route path={`/home`} element={<HomePage />} />
        <Route path='/courses' element={<CoursesPart />} />
        <Route path='/course/:courseId' element={<Course />} />
        <Route path='/course/:courseId/lesson/:lessonId' element={<Lesson />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/add' element={<AddCourse />} />
      </Routes> */}
      <UploadVideo />
      <Footer />
    </div>
  );
}

document.documentElement.setAttribute('data-theme', 'mytheme');
export default App;
// import { useEffect, useState } from 'react';
// import { getCourses } from './services/courseService';

// const App = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getCourses();
//         setCourses(data);
//       } catch (error) {
//         console.error('Failed to fetch students:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//     console.log(courses);
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Courses</h1>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.courseId}>{course.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
