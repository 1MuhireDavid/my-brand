const Form = () => {
    const [message, setMessage] = React.useState({
        email: "",
        pass: ""
    });
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setMessage((state) => ({ ...state, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(message.email == null || message.email == '' && (message.pass == null || message.pass == '')){
        alert("Please enter all fields")
    
                return false
    }else if(message.email == null || message.email == '' || !message.email.match(validRegex) && (message.pass !== null || message.pass !== '')){
        alert("Please enter email field")
        message.email.classList.add("input-error");
        message.email.addEventListener("animationend", function() {
          message.email.classList.remove("input-error");
        });
    
        return false
    }else if(message.pass.length < 6 || message.pass == null || message.pass == '' && (message.email !== null || message.email !== '')){
        alert("Please enter a valid password with character morethan 6")
        message.pass.classList.add("input-error");
        message.pass.addEventListener("animationend", function() {
          message.pass.classList.remove("input-error");
        });
        return false 
    }
     login(message.email, message.pass)
        
    }
    async function login(email, password) {
        try {
          const response = await fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          if (data.status === "success") {
            localStorage.setItem("token", data.data);
            if (data.role === "admin") {
              window.setTimeout(function(){
                  window.location.href="/dash/index.html";
              },4000);
            } else {
              window.location.href="./index.html";
            }
            return true;
          } else {
            console.log(data)
            return false;
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }

    return (
        <>
        <form method="post" action='' onSubmit={handleSubmit}>
     <div className="field email">
        <label>Email</label>
        <input id="email" name="email" type="email" onChange={handleChange}/>
    </div>
    <div className="field password">

        <label>Password</label>
        <input id="pass" name="pass" type="password" onChange={handleChange}/>
    </div>
    <div className="field">
        <input type="submit" value="Login"/>
    </div>
    </form> 
    </>
    )
}
const Login = () => {
    return(
        <>
        <h1>Login</h1>
        <Form />
        </>
    )
}
const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(<Login />);