import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Head>
        <title>{"Anthony Doan Website"}</title>
        <meta name="description" content="Discover the portfolio of Anthony Doan, a highly skilled software developer. View his past projects and get in touch to bring your next project to life." />
        <meta
            name="keywords"
            content="Anthony Doan, Anthony, Doan, antdoan, github, developer, cpp, software"
          />
        <link rel='icon' href='./logo.png'></link>
      </Head>

    </div>
  )
}