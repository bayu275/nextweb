import htmlimg from '../public/static/HTML.png';
import cssimg from '../public/static/CSS.png';
import jsimg from '../public/static/JAVASCRIPT.png';
import nodeimg from '../public/static/NODE.png';
import reactimg from '../public/static/REACT.png';
import bootimg from '../public/static/BOOTSTRAP.png'

export default function Skills(){
    return (
        <div className="container skills mt-5">
            <h3 className="text-center">Skills</h3>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-5">
                <div className="btn d-flex justify-content-start">
                    <img src={htmlimg} alt={htmlimg}/>
                    <h3>HTML 5</h3>
                </div>
                </div>
                <div className="col-5">
                <div className="btn d-flex justify-content-start">
                    <img src={cssimg} alt={cssimg}/>
                    <h3>CSS 3</h3>
                </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-5">
                <div className="btn d-flex justify-content-start">
                    <img src={jsimg} alt={jsimg}/>
                    <h3>JAVASCRIPT</h3>
                </div>
                </div>
                <div className="col-5">
                <div className="btn d-flex justify-content-start">
                    <img src={bootimg} alt={jsimg}/>
                    <h3>BOOTSTRAP</h3>
                </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-5">
                <div className="btn d-flex justify-content-start">
                    <img src={reactimg} alt={reactimg}/>
                    <h3>REACT</h3>
                </div>
                </div>
                <div className="col-5">
                <div className="btn d-flex justify-content-start">
                    <img src={nodeimg} alt={nodeimg}/>
                    <h3>NODEJS</h3>
                </div>
                </div>
            </div>
        <style jsx>{`
            img {
                padding-right: 20px;
            }
            .row {
                margin-left: 15%;
            }
        `}</style>
        </div>

    //     <div className="skills container-fluid">
    //       <h2>SKILLS</h2>
    //       <div className="container">
    //         <figure>
    //             <img src={htmlimg} alt={htmlimg}/>
    //             <h2>HTML 5</h2>
    //         </figure>
    //         <figure>
    //             <img src={cssimg} alt={cssimg}/>
    //             <h2>CSS 3</h2>
    //         </figure>
    //         <figure>
    //             <img src={jsimg} alt={jsimg}/>
    //             <h2>JAVASCRIPT</h2>
    //         </figure>
    //         <figure>
    //             <img src={bootimg} alt={jsimg}/>
    //             <h2>BOOTSTRAP</h2>
    //         </figure>
    //         <figure>
    //             <img src={reactimg} alt={reactimg}/>
    //             <h2>REACT</h2>
    //         </figure>
    //         <figure>
    //             <img src={nodeimg} alt={nodeimg}/>
    //             <h2>NODEJS</h2>
    //         </figure>
    //       </div>
    //       <style jsx>{`
    //         .skills {
    //             margin-top: 2rem;
    //         }
    //         .skills > h2 {
    //             text-align: center;
    //             margin: 0;
    //             font-family: 'Alice',serif;
    //         }
    //         .container {
    //             margin-top: 1.5rem;
    //             display: grid;
    //             grid-template-columns: repeat(3,auto);
    //             justify-content: center;
    //             grid-column-gap: 13px;
    //             grid-row-gap: 1.5rem;
    //         }
    //         figure {
    //             margin: 0;
    //             display: flex;
    //             border: 1px solid #918080;
    //             width: 15rem;
    //             border-radius: 1rem;
    //             box-shadow: 0px 5px 10px -1px #ccc;
    //             padding: 5px 10px;
    //         }
    //         figure :hover {
    //             background-color: #eeeeee;
    //             cursor: pointer;
    //         }
    //         figure img {
    //             width: 40px;
    //             height: 40px;
    //             align-self: center;
    //             margin-right: 10px;
    //         }
    //         figure > h2 {
    //             font-size: 1.2rem;
    //             font-family: 'Alice',serif;
    //             font-weight: 200;
    //             align-self: center;
    //         }
    //       `}</style>
    //   </div>
    )
}