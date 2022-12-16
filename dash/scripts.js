// SIDE TOGGLE

// var sidebarOpen = false;
// var sidebar = document.getElementById("sidebar");

// function openSidebar() {
//     if(!sidebarOpen) {
//         sidebar.classList.add("sidebar-responsive");
//         sidebarOpen = true;
//     }
// }

// function classSidebar() {
//     if(sidebarOpen) {
//         sidebar.classList.add("sidebar-responsive");
//         sidebarOpen = false;
//     }
// }

var title=document.getElementById("title");
var description=document.getElementById("description");
var pic=document.getElementById("pic");
var save_value=document.getElementById("save");
var localstorage_value=document.getElementById("localstorage_value");
var read_localstorage=document.getElementById("read_localstorage");
var delete_data=document.getElementById("delete_data");
var read_all_data=document.getElementById("read_all_data");

save_value.onclick=function(){
    localStorage.setItem(take_input.value,email.value);
}
read_localstorage.onclick=function(){
    localstorage_value.textContent=localStorage.getItem("name");
}
delete_data.onclick=function(){
    localStorage.removeItem("name");
}
read_all_data.onclick=function(){
    var keys=Object.keys(localStorage);
    console.log(keys);

    for(var key of keys){
        console.log("Key : "+keys+" :Value : "+localStorage.getItem(key));
    }
}

