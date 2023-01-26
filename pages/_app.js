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
    <html>
    <Head>
      <title>{"Anthony Doan Website"}</title>
      <meta name="description" content="Discover the portfolio of Anthony Doan, a highly skilled software developer. View his past projects and get in touch to bring your next project to life." />
      <link rel='icon' href='./logo.png'></link>
    </Head>
      <body>
        <NavBar/>
        <Home />
        <Portfolio/>
        <Skills/>
        <Contact/>
        <Footer/>
      </body>
    </html>
  );
  
}

export default MyApp
