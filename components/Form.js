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
        <p>Are you interested with me, and want to collaborate on a project ?</p>
        <form action="">
            <p>CONTACT US</p>
                <input ref={fullname} type="text" placeholder="Fullname" onKeyPress={handlePress}/>
                <input ref={email} type="text" placeholder="Your Email" onKeyPress={handlePress}/>
                <textarea ref={textarea} name="" id="" placeholder="Your Message" onKeyPress={handlePress}>
    
                </textarea>
            <button onClick={handleClick}>SEND EMAIL</button>
        </form>
        <style jsx>{`
            .interested {
                margin-top: 4rem;
                text-align: center;
            }
            .interested > p {
                font-size: 1.5rem;
                font-family: 'Alice',serif;
                margin: 0 0 2rem 0;
            }
            form {
                display: flex;
                flex-flow: column;
                width: 23rem;
                margin: 0 auto;
                border: 1px solid #A9A7A7;
                padding: 2rem 5rem;
                border-radius: 20px;
                font-family: 'Open Sans',serif;
            }
            form > p{
                font-family: 'Alice',serif;
                font-size: 1.3rem;
                margin: 0;
                text-align: left;
            }
            input{
                height: 2.5rem;
            }

            textarea {
                min-height: 12rem;
            }
            input , textarea{
                border-radius: 20px;
                border: 1px solid #A9A7A7;
                padding: 0 1rem;
                outline: none;
            }
            textarea {
                padding-top: 1rem; 
                resize: vertical;    
            }
            form p , input , textarea , button {
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

            }
        `}</style>
    </div>
)}
export default Form; 