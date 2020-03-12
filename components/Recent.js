import { useState } from 'react';

const recent = (props) => {
    const {gambar} = props.data
    console.log(props)
    const [isStatus,setIsStatus] = useState(false);
//     onMouseEnter={updateUI} onMouseLeave={updateUI}
// onMouseEnter={updateUI} onMouseLeave={updateUI}
// onMouseEnter={updateUI} onMouseLeave={updateUI}
    return (
        <figure>
            <img src={gambar} alt={gambar} /> 
            {isStatus == false ? null : <div className="show" ><p>Live Preview</p></div>} 
            {isStatus == false ? null :  <div className="title" ><p>Membuat Website Dinamis</p></div>}
        <style jsx>{`
            figure {
                margin: 0;
                height: auto;
                width: auto;
                box-sizing: border-box;
                position: relative; 
                float: left;
            }
            figure img {
                width: 22rem;
                height: 13rem;
                border-radius: 10px;
                display: block;
                margin: auto;
            }
            figure .show p , figure .title p  {
                color: #fff;
                text-align: center;
            }
            .show {
                width: 100%;
                position: absolute;
                top: 0.1px;
                background-color: rgba(0, 0, 0, .8);
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                animation: top 1.2s;   
                
            }
            .title {
                width: 100%;
                position: absolute;
                bottom: 0.1px;
                background-color: rgba(0, 0, 0, .8);
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                display: block;
                animation: bottom 0.8s;
            }
            @keyframes bottom {
                0%{
                    bottom: 50px;
                }
            }

            @keyframes top {
                0%{
                    top: 50px;
                }
            }

        `}</style>
        </figure>
    )
}

export default recent; 