import './App.css';
import Hero from './components/homepage/Hero';
import Nav from './components/homepage/Nav';

function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}
document.documentElement.setAttribute('data-theme', 'mytheme');
export default App;
