
//============================= new ==================================





var form = `<div>
  <div class="form-group">
    <label for="name">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Blog Title">
  </div>
  <div class="form-group">
    <label for="name">Upload blog image</label>
    <input type="file" class="form-control" id="pic">
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
      <th class="col-5">Image</th>
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
      <td><img src="${details[i].blogimage}" height=""></td>
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
var image
let blogimage = document.getElementById("pic");
blogimage.addEventListener("change", (e)=>{
  const img = e.target.files[0];
  const reader=new FileReader();
  reader.readAsDataURL(img);

  reader.addEventListener("load",  ()=>{
    image = reader.result;
  })
})
function save() {
  

 

    let title = document.getElementById("title");
    let description = document.getElementById("description");
   



    if (title.value == 0 || description.value == 0) {
        alert("Please enter all the fields");
        return
    }
    let data = {
        title: title.value,
        description: description.value,
        blogimage: image
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    title.value = "";
    description.value = "";
    blogimage.value = "";
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
    <label for="title">Title</label>
    <input type="text" value="${details[index].title}" class="form-control" id="newTitle" aria-describedby="emailHelp" placeholder="Update Your Name">
  </div>
  <div class="form-group">
    <label for="title">Upload new image</label>
    <input type="file" value="${details[index].blogimage}">
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
    var newDes = document.getElementById('newDes');

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