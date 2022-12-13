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

// var title=document.getElementById("title");
// var description=document.getElementById("description");
// var pic=document.getElementById("pic");
// var save_value=document.getElementById("save");
// var localstorage_value=document.getElementById("localstorage_value");
// var read_localstorage=document.getElementById("read_localstorage");
// var delete_data=document.getElementById("delete_data");
// var read_all_data=document.getElementById("read_all_data");

// save_value.onclick=function(){
//     localStorage.setItem(take_input.value,email.value,);
// }
// read_localstorage.onclick=function(){
//     localstorage_value.textContent=localStorage.getItem("name");
// }
// delete_data.onclick=function(){
//     localStorage.removeItem("name");
// }
// read_all_data.onclick=function(){
//     var keys=Object.keys(localStorage);
//     console.log(keys);

//     for(var key of keys){
//         console.log("Key : "+keys+" :Value : "+localStorage.getItem(key));
//     }
// }

//============================= new ==================================

var form = `<div>
  <div class="form-group">
    <label for="name">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Blog Title">
  </div>
  <div class="form-group">
    <label >Description</label>
    <textarea name="body" id="description" placeholder="Enter blog description">
    </textarea>
  </div>
  <button type="submit" class="btn btn-big" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">Title</th>
      <th class="col-4">Description</th>
      <th class="col-2">Edit</th>
      <th class="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].title}</td>
      <td>${details[i].description}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");

    if (title.value == 0) {
        alert("Title is Empty");
        return
    }
    let data = {
        title: title.value,
        description: description.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    title.value = "";
    description.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
    <form >

  <div class="form-group">
    <label for="name">Title</label>
    <input type="text" value="${details[index].title}" class="form-control" id="newTitle" aria-describedby="emailHelp" placeholder="Update Your Name">
  </div>
  <div class="form-group">
    <label for="email">Description</label>
    <textarea name="body" id="description">
    ${details[index].description} 
    </textarea>
    </div>
  <button type="submit" class="btn btn-big" onclick="update(${index})">Update</button>
</form>
  </div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let newTitle = document.getElementById('newTitle');
    let newDes = document.getElementById('newDes');

    details[index] = {
        title: newTitle.value,
        description: newDes.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}
//=============================================logout=================
function logout(){
  window.setTimeout(function(){
    window.location.href="../homepage.html";
},5000);
}