import Head from 'next/head';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Recents from '../components/Recents';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { Router, useRouter } from 'next/router';
import { useEffect } from 'react';

 
export default function Index() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Bayu Dirgantara</title>
      </Head>
      <Jumbotron/>
      <Navbar/>
      <About />
      <Skills/>
      <Recents />
      <Form />
      <Footer/>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Alice&family=Lato:wght@300&family=Open+Sans:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bellota:ital,wght@1,300&display=swap');
        * {
          font-family: 'Open Sans', sans-serif,'Alice', serif,'Lato', sans-serif;
        }
        body {
          font-size: 15px;
          background-color: #ffffff;
        }
        em {
          font-weight: bold;
        }
        .line {
          width: 2rem;
          border: 5px solid #A80606;
          border-radius: 100px;
          display: inline;
        }
        .about h2 {
          margin: 0;
        }
        button:hover {
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  )
}