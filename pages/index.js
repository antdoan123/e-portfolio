import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Anthony Doan Website"}</title>
        <meta name="description" content="Discover the portfolio of Anthony Doan, a highly skilled software developer. View his past projects and get in touch to bring your next project to life." />
        <meta
            name="keywords"
            content="Anthony Doan, Anthony, Doan, antdoan, github, developer, cpp, software"
          />
        <link rel='icon' href='./logo.png'></link>
      </Head>
      <main>
        <NavBar></NavBar>
        <Intro></Intro>
        <Portfolio/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>

    </>
  )
}