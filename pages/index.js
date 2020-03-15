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
      h2{
        margin: 0;
      }
      @media screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (orientation: portrait){

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
          width: 20rem !important;
        }

        footer .container {
          width: 100%;
        }
      }
      @media screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait){
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
      width: 22rem !important;
    }

    footer .container {
      width: 100%;
    }
  }
      }
    `}</style>
    </Layout>
  )
}