//import logo from './mybrand/src/logo.svg';
import React from 'react'
import ReactDOM from 'react-dom';
// export default function Contact() {
//     return(
//         <div className="form-contact">
//         <h1>Contact Us</h1>
//         <Form/>
//         </div>
//     )
// }
 function Contact() {
    const [message, setMessage] = useState({
        name: "",
        lastname: "",
        email: ""
    });
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setMessage((state) => ({ ...state, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)
    };
    const inputs = ["name", "email"];
    return(
        <form onsubmit={handleSubmit}>
            {inputs.map((element, index) => {
                <input onchange={handleChange} key={index} name={element}/>
            })}
            <textarea></textarea>
            <button>Submit</button>
        </form>
    )
}
const rootNode = documenr