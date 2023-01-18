var names=document.getElementById("names");
var email=document.getElementById("email");
var content=document.getElementById("content");
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 var save_value=document.getElementById("save");
 var localstorage_value=document.getElementById("localstorage_value");
// var read_localstorage=document.getElementById("read_localstorage");
// var delete_data=document.getElementById("delete_data");
// var read_all_data=document.getElementById("read_all_data");


feedback = [];
getData();
save_value.onclick=function(){
    if(names.value == null || names.value == '', email.value == null || email.value == '', content.value == null || content.value == ''){
    alert("Please make sure you have entered data in all fields")
    return false
    }else{
        save();
        //localStorage.setItem(names.value,email.value,content.value);
    }
    
}


function getData(){
    let Data = localStorage.getItem("feedback");
    if (Data) {
        feedback = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("feedback", JSON.stringify(feedback));
};

function save() {
  
        let email = document.getElementById("email");
        let content = document.getElementById("content");
        let name = document.getElementById("names")

        let data = {
            email: email.value,
            content: content.value,
            name: name.value
        };
        feedback.push(data);
        setData();
    
        // console.log(details)
        // console.log(email.value)
        //table();
        email.value = "";
        content.value = "";
        name.value = "";
    };
    function deleteData(index) {
        feedback.splice(index, 1);
        setData();
        table();
    
        // console.log('delete work')
        // console.log(details)
    };

