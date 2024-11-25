import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/General/Nav';
import AuthPage from './components/Login/AuthPage';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={`/`} element={<Navigate to='/home' replace />} />
        <Route path={`/home`} element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
  );
}
document.documentElement.setAttribute('data-theme', 'mytheme');
export default App;
