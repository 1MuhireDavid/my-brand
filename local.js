
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const url = "http://localhost:3000";
//const form = document.getElementById("form")

 //var save_value=document.getElementById("save");
 //var localstorage_value=document.getElementById("localstorage_value");
// var read_localstorage=document.getElementById("read_localstorage");
// var delete_data=document.getElementById("delete_data");
// var read_all_data=document.getElementById("read_all_data");


//feedback = [];
//getData();
// save_value.onclick=function(){
//     if(names.value == null || names.value == '', email.value == null || email.value == '', description.value == null || description.value == ''){
//     alert("Please make sure you have entered data in all fields")
//     return false
//     }else{
        
//         //localStorage.setItem(names.value,email.value,content.value);
//     }
    
// }


// function getData(){
//     let Data = localStorage.getItem("feedback");
//     if (Data) {
//         feedback = JSON.parse(Data);
//     } else {
//         setData();
//     };
// };
// function setData() {
//     localStorage.setItem("feedback", JSON.stringify(feedback));
// };

function save(){
var name=document.getElementById("names");
var email=document.getElementById("email");
var description=document.getElementById("content");

        let datas = {
            name: name.value,
            email: email.value,
            description: description.value
        };
        console.log(name.value, description.value, email.value);
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
        email.value = "";
        description.value = "";
        name.value = "";
    };
    // function deleteData(index) {
    //     feedback.splice(index, 1);
    //     //setData();
    //     table();
    
    //     // console.log('delete work')
    //     // console.log(details)
    // };

