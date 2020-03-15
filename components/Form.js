import { useRef } from "react";


const Form = () => {
    const fullname = useRef('');       
    const email = useRef('');
    const textarea = useRef('');
    const button = useRef('')
    const handlePress = (e) => {
        if(e.key === 'Enter'){
            if(e.target == fullname.current){
                console.log('sama')
            }else {
                console.log('tdk')
            }
        } 
    }

    const handleClick = (e) => {
        e.preventDefault();
        alert('hi');
    }

    return (
    <div className="interested">
        <form>
            <p>CONTACT US</p> 
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Your Name"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
            <textarea ref={textarea} name="" id="" placeholder="Your Message" onKeyPress={handlePress}/>
            </div> 
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <style jsx>{`
            form {  
                width: 20rem;
                margin: 0 auto;
                border: 1px solid #A9A7A7;
                padding: 2rem 3rem;
                border-radius: 20px;
                font-family: 'Open Sans',serif;
            }
            form > p{
                font-family: 'Alice',serif;
                font-size: 1.3rem;
                margin: 0;
                text-align: left;
            }
            input , textarea{
                border-radius: 20px;
                border: 1px solid #A9A7A7;
                padding: 0 1rem;
                outline: none;
            }
            textarea {
                min-height: 8rem;
                padding-top: 1rem;
                padding-bottom: 1rem; 
                width: 100%;
                margin-bottom: 0 !important;
            }
            input , textarea , button {
                margin-bottom: 1rem;
            }
            button {
                outline: none;
                width: 10rem;
                height: 2.5rem;
                border-radius: 20px;
                border: 1px solid #e34646;
                background-color: #e34646;
                color: #fff;
                font-size: 1rem;
                margin: 0;

            }
        `}</style>
    </div>
)}
export default Form;   