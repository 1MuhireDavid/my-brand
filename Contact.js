
 const Form = () => {
    const [message, setMessage] = React.useState({
        fullName: "",
        content: "",
        email: ""
    });
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setMessage((state) => ({ ...state, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const url = "http://localhost:3000";
if(message.content == null || message.content == '' && (message.name == null || message.name == '') && (message.content == null || message.content == '')){
  alert("Please enter all fields")

          return false
}else if(message.email !== null || message.email !== '' && (message.name !== null || message.name !== '') && (message.content == null || message.content == '')){
    alert("Please enter all description")

            return false
}
else if(message.email == null || message.email == '' && (message.name !== null || message.name !== '') && (message.content == null || message.content == '')){
    alert("Please enter email field")
    message.email.classList.add("input-error");
    message.email.addEventListener("animationend", function() {
      message.email.classList.remove("input-error");
    });

    return false
}else if(message.name == "" || message.name == null || message.name == '' && (message.email !== null || message.email !== '') && (message.content == null || message.content == '')){
    alert("Please enter a name")
    message.name.classList.add("input-error");
    message.name.addEventListener("animationend", function() {
      message.name.classList.remove("input-error");
    });
    return false 
}
let datas = {
  name: message.fullName,
  email: message.email,
  description: message.content
};
console.log(datas)
fetch(`${url}/contactUs`, {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(datas),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
//feedback.push(data);
//setData();

// console.log(details)
// console.log(email.value)
//table();
message.email = "";
message.content = "";
message.fullName = "";

    };
    return(
        <>
        <form action="" id="form" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <div className="icons">
              <i className="fa fa-user icon"></i>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="input-field"
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>
            <label>Email </label>
            <div className="icons">
              <i className="fa fa-envelope icon"> </i>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <label>Content </label>
            <div className="icons">
              <textarea name="content" id="content" className="input-field" cols="30" rows="10" placeholder="Please enter your comment here" onChange={handleChange}></textarea>
            </div>
          </fieldset>
          <button type="submit">Submit </button>
        </form></>
    )
}
const ContactMe = () => {
    return(
        <>
        <div className="form-contact">
        <h1>Contact us</h1>
        <Form />
      </div>
    
     <div className="form-container">
      <div className="icon change">
        <i className="fa-solid fa-location-dot"></i>
        <p>Address: Kigali - Rwanda</p>
      </div>
      <div className="icon change">
        <i className="fa-solid fa-phone"></i>
        <p>Tel: 0788787769</p>
      </div>
      <div className="icon">
        <i className="fa fa-envelope icon"> </i>
        <p>Email: muhiredavid74@gmail.com</p>
      </div></div>
        </>
    )
}
const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(<ContactMe />);

