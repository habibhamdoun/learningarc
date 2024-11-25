import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Nav from "./components/homepage/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={`/`} element={<Navigate to="/home" replace />} />
        <Route path={`/home`} element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path='/Login' element={<Login />} /> */}
      </Routes>
    </div>
  );
}
document.documentElement.setAttribute("data-theme", "mytheme");
export default App;
