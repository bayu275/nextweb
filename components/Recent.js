import portofolio from '../static/images/Porto';
import Gallery from '../components/Gallery';
import { useRef, useEffect, useState, createRef } from 'react';

export default function Recent(){
    let data = portofolio.portofolio;
    const [isStatus,setIsStatus] = useState(false);
    const figure = useRef(this)

    function updateUI(e){
        e.preventDefault();
        console.log(e)
        if(e.type === 'mouseenter'){
            setIsStatus(true)
        }else if(e.type === 'mouseleave'){
            setIsStatus(false)
        }
    }

    return (
        <div className="recent">
          <h2>RECENT WORKS</h2>
          <section >
            {data.map((item,index) => (
                <Gallery data={item} key={index}/>
            ))}
        </section>
      <style jsx>{`
      .recent {
          padding: 0 4rem;
          margin-top: 3.5rem
          
      }
        section {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: repeat(3,auto);
            grid-gap: 2rem;
            justify-content: center;
            box-sizing: border-box;
        }
        h2{
            text-align: center;
            font-family: 'Alice',serif;
            margin: 0;
        }
      `}</style>
      </div>
    )
}