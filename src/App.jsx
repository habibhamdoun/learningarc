import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/General/Nav";
import AuthPage from "./components/Login/AuthPage";
import CoursesPart from "./components/CoursesPage/CoursesPart";
import HomePage from "./components/homepage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path={`/`} element={<Navigate to="/home" replace />} />
        <Route path={`/home`} element={<HomePage />} />
        <Route path="/courses" element={<CoursesPart />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
document.documentElement.setAttribute("data-theme", "mytheme");
export default App;
