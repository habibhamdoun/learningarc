import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar/Nav';
import AuthPage from './components/Login/AuthPage';
import CoursesPart from './components/CoursesPage/CoursesPart';
import HomePage from './components/homepage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/General/Footer';
import Course from './components/Course/Course';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <Routes>
        <Route path={`/`} element={<Navigate to='/home' replace />} />
        <Route path={`/home`} element={<HomePage />} />
        <Route path='/courses' element={<CoursesPart />} />
        <Route path='/course/:id' element={<Course />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}
document.documentElement.setAttribute('data-theme', 'mytheme');
export default App;
