var names=document.getElementById("names");
var email=document.getElementById("email");
var content=document.getElementById("content");

var save_value=document.getElementById("save");
var localstorage_value=document.getElementById("localstorage_value");
var read_localstorage=document.getElementById("read_localstorage");
var delete_data=document.getElementById("delete_data");
var read_all_data=document.getElementById("read_all_data");



save_value.onclick=function(){
    if(names.value == null || names.value == '', email.value == null || email.value == '', content.value == null || content.value == ''){
    alert("Please make sure you have entered data in all fields")
    return false
    }else{
        localStorage.setItem(names.value,email.value,content.value);
    }
    
}


//========================not needed====================================================

// read_localstorage.onclick=function(){
//     localstorage_value.textContent=localStorage.getItem("name");
// }
// delete_data.onclick=function(){
//     localStorage.removeItem("name");
// }


//=========================needed=====================================================


read_all_data.onclick=function(){
    var keys=Object.keys(localStorage);
    console.log(keys);

    for(var key of keys){
        console.log("Key : "+keys+" :Value : "+localStorage.getItem(key));
    }
}

function sort(array){
    var t, min, i, j;
    var newarr = new array();

for(i=0;i<array.length;i++){
     min=i;
    for(j=i+1;j<array.length;j++){
    if(array[j] > array[min])
     {
    // min=j;
    newarr.push(array[j])
     }
    // t=array[i];
    // array[i]=array[min];
    // array[min]=t;
    }

    }
    for(i=0;i<newarray.length;i++)
       console.log(newarray[i]);
    }
console.log(sort([23,4,56,7,8,9,89]))
