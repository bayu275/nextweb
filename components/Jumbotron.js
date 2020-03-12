import jumbotron from '../public/static/JUMBOTRON.png'
import myimage from '../public/static/SAYA.jpg'

export default function Jumbotron(){
    return (
            <main>
                <div className="profile">
                    <img src={myimage} alt={myimage}/>
                    <h1>Bayu Dirgantara</h1>
                    <p>FullStack Web Developer</p>
                    <p>bayuusetiawan86@gmail.com</p>
                </div>
            <style jsx>{`
                main {
                    background: url(${jumbotron});
                    min-height: 455px;
                    display: flex;
                    justify-content: center;
                }
                .profile {
                    text-align: center;
                    align-self: center;
                    align-content: center;
                    color: #EEEEEE;
                }
                h1 {
                    color: #E0DDDD;
                    margin: 0;
                    margin-bottom: 14px;
                    font-family: 'Alice',serif;
                }
                p {
                    margin: 0
                }
                img {
                    width: 8rem;
                    height: 8rem;
                    border-radius: 100%;
                }
            `}</style>
            </main>
    )
}