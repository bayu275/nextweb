import Head from 'next/head';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Recents from '../components/Recents';
import Layout from '../components/Layout';

 
export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Bayu Dirgantara</title>
      </Head>
      <Jumbotron/>
      <Navbar/>
      <About/>
      <Skills/>
      <Recents/>
    <style jsx global>{`
      body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: rgba(0,0,0,0.8);
      }
      @media (max-width: 767px){

        body {
          font-size: 12px;
          width: auto;
        }

        .about > .container {
          display: flex;
          flex-flow: row;
          padding: 0;
        }

        .about .container > img {
          width: 50%;
          height: 50%;
        }

        .about .container > span {
          text-align: center;
        }

        .about .container span p {
          line-height: 15px;
        }

        about .container span button {
          margin: 15px auto 0 auto;
        }

        .skills > .container {
          grid-template-rows: auto;
          grid-template-columns: unset;
        }

        .recent > section {
          grid-template-rows: auto;
          grid-template-columns: unset;
        }

        .interested form {
          width: 100%;
        }
        footer .container {
          width: 100%;
        }
      }
    `}</style>
    </Layout>
  )
}