  document.getElementById("validate").addEventListener("click",loginValidate);
  //document.getElementById("save").addEventListener("click",contactValidate);

function loginValidate(e){
    e.preventDefault();
    var emailId = document.getElementById("email").value
    var password = document.getElementById("pass").value
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(emailId == null || emailId == '' && (password == null || password == '')){
    alert("Please enter all fields")

            return false
}else if(emailId == null || emailId == '' || !emailId.match(validRegex) && (password !== null || password !== '')){
    alert("Please enter email field")
    emailId.classList.add("input-error");
    emailId.addEventListener("animationend", function() {
      emailId.classList.remove("input-error");
    });

    return false
}else if(password.length < 6 || password == null || password == '' && (emailId !== null || emailId !== '')){
    alert("Please enter a valid password with character morethan 6")
    password.classList.add("input-error");
    password.addEventListener("animationend", function() {
      password.classList.remove("input-error");
    });
    return false 
}
 login(emailId, password)
    
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








// async function login(email, password) {
//     try {
//       const response = await fetch("http://localhost:3000/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (data.status === "success") {
//         localStorage.setItem("token", data.data);
//         window.setTimeout(function(){
//             window.location.href="/dash/index.html";
//         },4000);
//         return true;
//       } else {
//         console.log(data)
//         return false;

//       }
//     } catch (error) {
//       console.error(error);
//       return false;
//     }
//   }