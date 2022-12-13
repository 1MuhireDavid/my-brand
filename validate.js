  document.getElementById("validate").addEventListener("click",loginValidate)

function loginValidate(e){
    e.preventDefault();
    var emailId = document.getElementById("email").value
    var password = document.getElementById("pass").value

    if(emailId == null || emailId == ''){
        
    if(password == null || password == ''){
        if(emailId == null || emailId == '', password == null || password == ''){
            // m.toast({
            //     html:'Please fill in all fields'
            // });
    
        console.log("hello")
            // return false;
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







// function loginValidate(e){
//     e.preventDefault();
//     var emailId = document.getElementById("email").value
//     var password = document.getElementById("pass").value

//     if(emailId == null || emailId == ''){
        
//     if(password == null || password == ''){
//         if(emailId == null || emailId == '', password == null || password == ''){
//             // m.toast({
//             //     html:'Please fill in all fields'
//             // });
    
//             // return false;
//             alert("Please enter all fields")
//             return false
//         }
//      else {
//             alert("Please enter password field")
//             console.log("password not entered")
//              return false   
//         }
//     }else {
//         alert("Please enter email field")
//     return false
//     }
//         }    
    
// }