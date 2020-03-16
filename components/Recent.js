import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const recent = (props) => {
    const { gambar } = props.data;
    return (
        <div className="card">
          <img className="card-img-top" src={gambar} alt={gambar}/>
        <style jsx>{`
            .card {
            width: 100%;
            border-radius: 20px !important;
            }
            img {
            border-radius: 20px !important;
            height: 15rem;
            }
        `}</style>
        </div>
    )
    // const {gambar} = props.data
    // const [isStatus,setIsStatus] = useState(false);
    // const latar = useRef('');
     
    // function updateUI(e){
    //     e.preventDefault();
    //     if(e.type === 'mouseenter'){
    //         setIsStatus(true)
    //     }else if(e.type === 'mouseleave'){
    //         setIsStatus(false)
    //     }
    // }

    // return (
    //     <figure >
    //         <img id="recentimg" src={gambar} alt={gambar} onMouseEnter={updateUI} onMouseLeave={updateUI}/> 
    //         <div id="recentimg" ref={latar} className="latar" onMouseEnter={updateUI} onMouseLeave={updateUI}><img src={require('../public/static/click.svg')} alt={require('../public/static/click.svg')}/></div>  
    //         {/* {isStatus == false ? null : <div className="latar"><img src={require('../public/static/click.svg')} alt={require('../public/static/click.svg')} onMouseEnter={updateUI} onMouseLeave={updateUI}/></div>}  */}
    //         {/* {isStatus == false ? null : <div className="show" onMouseEnter={updateUI} onMouseLeave={updateUI}><a href="https://moviesdirgantara.netlify.com" target="_blank" rel="noopener noreferrer"><p>Live Preview</p></a></div>}  */}
    //         {/* {isStatus == false ? null :  <div className="title" onMouseEnter={updateUI} onMouseLeave={updateUI}><Link href="/portofolio"><a><p>Membuat Website Dinamis</p></a></Link></div>} */}
    //     <style jsx>{`
    //         .latar {
    //             width: 20rem;
    //             height: 13rem;
    //             position: absolute;
    //             top: 0;
    //             border-radius: 10px;
    //             background-color: rgba(0, 0, 0, .8);
    //             display: ${isStatus == false ? `none` : `flex`}; 
    //             animation : detail 0.5s ease;
    //         }

    //         @keyframes detail {
    //             from {
    //                 width: 0;
    //             }
    //             to {
    //                 width: 100%;   
    //             }

    //         }

    //         .latar img { 
    //             width: 50px;
    //             height: 50px;
    //         }
    //         figure {
    //             margin: 0;
    //             height: auto;
    //             width: auto;
    //             box-sizing: border-box;
    //             position: relative; 
    //             float: left;
    //         }
    //         figure img {
    //             width: 20rem;
    //             height: 13rem;
    //             border-radius: 10px;
    //             display: block;
    //             margin: auto;
    //         }
    //         figure .show a , figure .title a  {
    //             color: #fff;
    //             text-decoration: none;
    //             text-align: center;
    //         }
    //         figure .show  a , figure .title a :hover { 
    //             font-weight: bold;
    //         }
    //         .show {
    //             width: 100%;
    //             position: absolute;
    //             top: 0.1px;
    //             background-color: rgba(0, 0, 0, .8);
    //             border-top-right-radius: 10px;
    //             border-top-left-radius: 10px;
    //             animation: top 1.2s;   
                
    //         }
    //         .title {
    //             width: 100%;
    //             position: absolute;
    //             bottom: 0.1px;
    //             background-color: rgba(0, 0, 0, .8);
    //             border-bottom-left-radius: 10px;
    //             border-bottom-right-radius: 10px;
    //             display: block;
    //             animation: bottom 0.8s;
    //         }

    //     `}</style>
    //     </figure>
    // )
}

export default recent;