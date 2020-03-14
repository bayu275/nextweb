import footerImg from '../public/static/FOOTER.png';
import twImg from '../public/static/twiiter.svg'
import fbImg from '../public/static/facebook.svg'
import igImg from '../public/static/instagram.svg'
import gitImg from '../public/static/github.svg'
import Form from '../components/Form';

const footer = () => {
    return (
        <footer>
            <h2>Contact Me</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form/>
                        <p>Social Media</p>
                        <div className="d-flex flex-row justify-content-start">
                            <div className="p-2">
                                <a target="blank" href="https://twitter.com/_badirr">
                                    <img src={twImg} alt={twImg} />
                                </a>
                            </div>
                            <div className="p-2">
                                <a target="blank" href="https://www.facebook.com/bayu275">
                                    <img src={fbImg} alt={fbImg} />
                                </a>
                            </div>
                            <div className="p-2">
                                <a target="blank" href="https://www.instagram.com/baydirgan">
                                    <img src={igImg} alt={igImg} />
                                </a>
                            </div>
                            <div className="p-2">
                                <a target="blank" href="https://github.com/bayu275">
                                    <img src={gitImg} alt={gitImg} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127669.0495089475!2d101.37113474552513!3d0.513962478911432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab80690ee7b1%3A0x94dde92c3823dbe4!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1583780728791!5m2!1sid!2sid"></iframe>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; Bayu Dirgantara 2020.</p>
                    </div>
                </div>
            </div>
        <style jsx>{`
            footer {
                margin-top: 3.5rem;
            }
            footer > h2{
                text-align: center;
                font-family: 'Alice',serif;
            }
            .p-2 a  img {
                width: 40px;
                height: 40px;
                margin: 10px 2px;
            }
            .d-flex {
                margin-left: 15%;
            }
            .col p {
                margin: 10px 0 0 17%;
                font-family: 'Bellota', cursive;
                color: #3a84df;
                font-weight: bold;
            }
            .col > iframe {
                width: 100%;
                height: 95%;
                border: 2px solid #55acee;
            }
            .col {
                margin-top: 1.5rem;
            }
            .subfooter{
                background-color: #fafafa;
                border-top: 1px solid #f3f3f3;
                border-bottom: 1px solid #f3f3f3;
                padding: 40px 0;
            }
            .subfooter p {
                font-size: 15px;
                margin: 0;
                text-align: center;
            }
        `}</style>
        </footer>
    )
}

export default footer;