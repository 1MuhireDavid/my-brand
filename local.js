var names=document.getElementById("names");
var email=document.getElementById("email");
var content=document.getElementById("content");

var save_value=document.getElementById("save");
var localstorage_value=document.getElementById("localstorage_value");
var read_localstorage=document.getElementById("read_localstorage");
var delete_data=document.getElementById("delete_data");
var read_all_data=document.getElementById("read_all_data");



save_value.onclick=function(){
    localStorage.setItem(names.value,email.value,content.value);
}
// read_localstorage.onclick=function(){
//     localstorage_value.textContent=localStorage.getItem("name");
// }
// delete_data.onclick=function(){
//     localStorage.removeItem("name");
// }
read_all_data.onclick=function(){
    var keys=Object.keys(localStorage);
    console.log(keys);

    for(var key of keys){
        console.log("Key : "+keys+" :Value : "+localStorage.getItem(key));
    }
}