import Home from './components/Home';
import '../styles/globals.css'
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MyApp() {
  return (
    <div>
      <NavBar/>
      <Home />
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
  
}

export default MyApp
