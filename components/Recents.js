import portofolio from '../public/static/images/Porto';
import Recent from '../components/Recent'; 

export default function Recents(){
    const data = portofolio.portofolio;
    
    return (
        <div className="recent">
          <h2>RECENT WORKS</h2>
          <section >
            {data.map((item,index) => (
                <Recent data={item} key={index}/>  
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