  document.getElementById("validate").addEventListener("click",loginValidate);
  document.getElementById("save").addEventListener("click",contactValidate);

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

    return false
}else if(password.length < 6 || password == null || password == '' && (emailId !== null || emailId !== '')){
    alert("Please enter a valid password with character morethan 6")
    return false 
}

    window.setTimeout(function(){
        window.location.href="/dash/index.html";
    },5000);

    
}

function contactValidate(e){
    e.preventDefault();
    var emailId = document.getElementById("email").value
    var name = document.getElementById("names").value
    var content = document.getElementById("content").value


    if(emailId == null || emailId == '' || !emailId.match(validRegex), content == null || content == '', name == null || name == ''){   
    if(emailId == null || emailId == ''){
        alert("Email field should not be blank or correct email format")
        return false 
    }
        
    else if(content == null || content == ''){
        alert("Please enter password field")
            console.log("password not entered")
            return false 
    }
    else{
        alert("Please enter password field")
            console.log("password not entered")
            return false 
    }


            
        }
        else{
            // alert("Please enter all fields")
            return true
        }          
    
}