  document.getElementById("validate").addEventListener("click",loginValidate);
  document.getElementById("save").addEventListener("click",contactValidate);

function loginValidate(e){
    e.preventDefault();
    var emailId = document.getElementById("email").value
    var password = document.getElementById("pass").value

    if(emailId == null || emailId == ''){
        
    if(password == null || password == ''){
        if(emailId == null || emailId == '', password == null || password == ''){
            alert("Please enter all fields")
            return false
        }
     else {
            alert("Please enter password field")
            console.log("password not entered")
             return false   
        }
    }else {
        alert("Please enter email field")
    return false
    }
        }else{
            window.setTimeout(function(){
                window.location.href="/dash/index.html";
            },5000);
        }
    
}

function contactValidate(e){
    e.preventDefault();
    var emailId = document.getElementById("email").value
    var name = document.getElementById("names").value
    var content = document.getElementById("content").value


    if(emailId == null || emailId == '', content == null || content == '', name == null || name == ''){   
    if(emailId == null || emailId == ''){
        alert("Email field should not be blank")
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