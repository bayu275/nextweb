import { useState, useRef, useEffect } from 'react';

const gallery = (props) => {
    const [isStatus,setIsStatus] = useState(false);
    const [opacity,setOpacity] = useState(null);
    const img = useRef('');
    const button = useRef('');
    // console.log(props)
    function updateUI(e){
        e.preventDefault();
        // console.log(e)
        if(e.type === 'mouseenter'){
            setIsStatus(true)
        }else if(e.type === 'mouseleave'){
            setIsStatus(false)
        }
    }


    useEffect(()=>{
        function getStyle(){
            if(isStatus === false){
                // console.log(img.current)
                img.current.style.opacity = '100%';
            }else {
                img.current.style.opacity = '20%';
            }
        }
        getStyle();
    })

    // getStyle = () => {
    //     let style = css`display {display: block;}`
    //     return style;
    // }


    return (
        <figure>
            <img ref={img} src={props.data.gambar}alt={props.data.gambar} onMouseEnter={updateUI} onMouseLeave={updateUI}/>  
            <div className="title"><p>Live Preview</p></div>
            <div className="show"><p>Membuat Website Dinamis</p></div>
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
            figure .show {
                width: 100%;
                position: absolute;
                bottom: 0.1px;
                background-color: rgba(0, 0, 0, .8);
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                display: block;
            }
            figure .show p , figure .title p  {
                color: #fff;
                text-align: center;
            }
            figure .title {
                width: 100%;
                position: absolute;
                top: 0.1px;
                background-color: rgba(0, 0, 0, .8);
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
            }

        `}</style>
        </figure>
    )
}

export default gallery;