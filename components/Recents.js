import portofolio from '../public/static/images/Porto';
import Recent from '../components/Recent'; 

export default function Recents(){
    const data = portofolio.portofolio;
    
    return (
      <div className="container recents mt-5">
        <h3 className="text-center">Recent Works</h3>
        <div className="card-group mt-3">
          {data.map((item,index)=> (
            <Recent 
              key = {index}
              data = {item}
            />
          ))}
          <div className="visible">...</div>
          <div className="invisible">...</div>
        </div>
      <style jsx>{`
      .container {
        margin: 0 auto;
      }
      .card-group {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap : 20px;
      width: 100%;
      height: 60%;
      }
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

      //   <div className="recent container-fluid">
      //     <h2>RECENT WORKS</h2>
      //     <section >
      //       {data.map((item,index) => (
      //           <Recent data={item} key={index}/>  
      //       ))} 
      //   </section>
      // <style jsx>{`
      // .recent {
      //     padding: 0 4rem;
      //     margin-top: 3.5rem
          
      // }
      //   section {
      //       margin-top: 3rem;
      //       display: grid;
      //       grid-template-columns: repeat(3,auto);
      //       grid-gap: 2rem;
      //       justify-content: center;
      //       box-sizing: border-box;
      //   }
      //   h2{
      //       text-align: center;
      //       font-family: 'Alice',serif; 
      //       margin: 0;
      //   }
      // `}</style>
      // </div>
    )
} 