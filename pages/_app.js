import Home from './components/Home';
import '../styles/globals.css'
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Head from 'next/head';


function MyApp() {
  return (
    <main>
    <Head>
      <title>{"Anthony Doan"}</title>
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name="description" content="Discover the portfolio of Anthony Doan, a highly skilled software developer. View his past projects and get in touch to bring your next project to life." />
      <meta
          name="keywords"
          content="Anthony Doan, Anthony, Doan, antdoan, github, developer, cpp, software"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='./logo.png'></link>
    </Head>
      <div>
        <NavBar/>
        <Home />
        <Portfolio/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
  
}

export default MyApp
