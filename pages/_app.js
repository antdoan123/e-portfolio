import Home from './components/Home';
import '../styles/globals.css'
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function MyApp() {
  return (
    <div>
      <NavBar/>
      <Home />
      <Portfolio/>
      <Skills/>
    </div>
  );
  
}

export default MyApp
