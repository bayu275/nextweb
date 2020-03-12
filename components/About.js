import img from '../public/static/ABOUT.png';
import imgBtn from '../public/static/paper-plane.svg';

const about = () => (
  <div className="about">
      <h2>ABOUTtt!!! Bayu dirgantara development</h2>
      <div className="container">
          <span>
              <p>Hi, saya <em>Bayu Dirgantara</em>, FullStack Web Developer - Pekanbaru</p>
              <p>Saya sangat tertarik dengan web developer dan yang terkait <br/>dengan <em>“pemograman”</em></p>
              <p>Saya belajar pemograman sebagai FullStack Web Developer <br/>secara <em>“otodidak”</em></p>
              <p>Saya siap implementasi project with <em>“wonderful people”</em></p>
              <button><img src={imgBtn} alt={imgBtn}/><font>Contact me</font></button>
              </span>
          <img src={img} alt={img} />
      </div>
      <style jsx>{`
        .about {
            margin-top: 2rem;
            text-align: center;
        }
        h2 {
            font-family: 'Alice',serif;
        }
        .container {
            margin-top: 1.5rem;
            display: grid;
            grid-template-columns: repeat(2,45%);
            justify-content: center;
            grid-column-gap: 50px;
            padding-left: 7.5rem;
        }
        span {
            text-align: right;
            align-self: center;
        }
        button img {
            width: 20px;
            height: 20px;
            padding-right: 6px;
        }
        button {
            box-shadow: 0px 5px 10px -1px #ccc;
            width: 140px;
            height: 40px;
            display: flex;
            border: 1px solid #000000;
            padding: 4px 1rem;
            border-radius: 10px;
            margin-left: auto;
            background-color: #ffffff;
            margin-top: 15px;
            outline: none;
        }
        button:hover {
            background-color: #eeeeee;
            cursor: pointer;
        }
        button p {
            margin: 0;
        }
      `}</style>
  </div>
)

export default about;
