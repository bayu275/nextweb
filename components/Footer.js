import footerImg from '../public/static/FOOTER.png';
import twImg from '../public/static/twiiter.svg'
import fbImg from '../public/static/facebook.svg'
import igImg from '../public/static/instagram.svg'
import gitImg from '../public/static/github.svg'

const footer = () => {
    return (
        <footer>
            <main>
                <div className="social">
                    <h2>Social Media</h2>
                    <figure>
                        <section>
                            <a target="blank" href="https://twitter.com/_badirr">
                                <img src={twImg} alt={twImg} />
                                <figcaption>Twitter</figcaption>
                            </a>
                        </section>
                        <section>
                            <a target="blank" href="https://www.facebook.com/bayu275">
                                <img src={fbImg} alt={fbImg} />
                                <figcaption>Facebook</figcaption>
                            </a>
                        </section>
                        <section>
                            <a target="blank" href="https://www.instagram.com/baydirgan">
                                <img src={igImg} alt={igImg} />
                                <figcaption>Instagram</figcaption>
                            </a>
                        </section>
                        <section>
                            <a target="blank" href="https://github.com/bayu275">
                                <img src={gitImg} alt={gitImg} />
                                <figcaption>Github</figcaption>
                            </a>
                        </section>
                    </figure>
                    <p>&copy; Bayu Dirgantara 2020</p>
                </div>
                
                <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127669.0495089475!2d101.37113474552513!3d0.513962478911432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab80690ee7b1%3A0x94dde92c3823dbe4!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1583780728791!5m2!1sid!2sid"></iframe> 
            </main>
            {/* <div>
                <p>&copy; Bayu Dirgantara 2020.</p>
            </div> */}
        <style jsx>{`
            footer {
                margin-top: 2rem;
                background-color: #eee;
                border-top: 1px solid #000;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
            }
            main {
                min-height: 20rem;
                display: flex;
            }
            main .social {
                text-align: center;
                width: 30%;
                color: #000000;
                font-family: 'Alice',serif;
            }
            .social p {
                font-size: 12px;
            }
            .social figure {
                margin: 0;
            }
            .social figure img {
                background-color: #eeeeee;
                width: 40px;
                height: 40px;
                margin-right: 20px;
            }
            .social figure section a {
                width: 0;
                display: flex;
                padding: 0 20px 10px 20px;
            }
            .social figure section figcaption {
                font-family: 'Bellota', cursive;
                color: #3a84df;
                font-weight: bold;
                align-self: center;
            }
            .social figure section a > figcaption, .social figure a > img :hover {
                cursor: pointer;
            }

            main > iframe {
                border-radius: 10px;
                width:1500px;
                height: auto;
                frameborder:0; 
                border:0; 
                allowfullscreen:"";
            }
        `}</style>
        </footer>
    )
}

export default footer;