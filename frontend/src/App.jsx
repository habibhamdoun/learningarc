import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar/Nav';
import Footer from './components/General/Footer';
import AuthPage from './components/Login/AuthPage';
import CoursesPart from './components/CoursesPage/CoursesPart';
import HomePage from './components/homepage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';
import AdminPage from './components/Dashboard/AdminPage';
import Lesson from './components/Lessons/Lesson.jsx';
import AddCourseForm from './components/AddCourseForm.jsx';
import AddLesson from './components/AddLesson.jsx';
// import LogoutBtn from './components/General/LogoutBtn.jsx';
import User from './components/General/User.jsx';

function App() {
  return (
    <div>
      <Nav />
      <User />
      <Routes>
        <Route path={`/`} element={<Navigate to='/home' replace />} />
        <Route path={`/home`} element={<HomePage />} />
        <Route path='/courses' element={<CoursesPart />} />
        <Route path='/course/:courseId' element={<Course />} />
        <Route path='/course/:courseId/lesson/:lessonId' element={<Lesson />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/add' element={<AddCourseForm />} />
        <Route path='/admin/lessons/add' element={<AddLesson />} />
      </Routes>
      {/* <LogoutBtn /> */}
      <Footer />
    </div>
  );
}

document.documentElement.setAttribute('data-theme', 'mytheme');
export default App;
