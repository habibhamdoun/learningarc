import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/homepage/Nav';
import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={`/`} element={<Navigate to='/home' replace />} />
        <Route path={`/home`} element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        {/* <Route path='/Login' element={<Login />} /> */}
      </Routes>
    </div>
  );
}
document.documentElement.setAttribute('data-theme', 'mytheme');
export default App;
