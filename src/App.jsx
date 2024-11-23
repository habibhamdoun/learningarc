import './App.css';
import HomePage from './components/homepage/HomePage';
import Nav from './components/homepage/Nav';

function App() {
  return (
    <>
      <Nav />
      <HomePage />
    </>
  );
}
document.documentElement.setAttribute('data-theme', 'mytheme');
export default App;
