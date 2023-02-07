

var form = `<div>
  <div class="form-group">
  <form>
    <label for="name">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Blog Title">
  </div>
  <div class="form-group">
    <label for="name">Upload blog image</label>
    <input type="url" class="form-control" id="pic">
  </div>
  <div class="form-group">
    <label >Description</label>
    <textarea name="body" id="description" placeholder="Enter blog description">
    </textarea>
  </div>

  <button type="submit" class="btn btn-big" onclick="save()">Save</button>
</form>
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
      <td id="desc">${details[i].description}</td>
      <td><img src="${details[i].blogimage}" height=""></td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})"><i class="fa-regular fa-pen-to-square"></i></button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})"><i class="fa-solid fa-trash"></i></button></td>
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

//var image
// blogimage.addEventListener("change", (e)=>{
//   const img = e.target.files[0];
//   const reader=new FileReader();
//   reader.readAsDataURL(img);

//   reader.addEventListener("load",  ()=>{
//     image = reader.result;
//   })
// })


function save() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let image = document.getElementById("pic");

    if (title.value == 0 || description.value == 0) {
        alert("Please enter all the fields");
        return
    }
    let data = {
        title: title.value,
        description: description.value,
        blogimage: image.value
    };
  console.log(title.value, description.value, image.value);
 // const token =
 //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGMyN2QyODZiMGM4MzZhNzc5ODU3MiIsImlhdCI6MTY3NTc2NTU1NiwiZXhwIjoxNjc1ODUxOTU2fQ.lzJWBpnuH1lKc7LrQSgsUVPV2_u6iAueAx8iv89bTpE";
  const url = "http://localhost:3000/posts";
  const body = {
    title: title.value,
    description: description.value,
    imageUrl: image.value,
  };
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
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
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" value="${details[index].title}" class="form-control" id="newTitle" aria-describedby="emailHelp" placeholder="Update Your Name">
  </div>
  <div class="form-group">
    <label for="title">Upload new image</label>
    <input type="file" value="${details[index].blogimage}" id="picture">
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea name="body" id="NewDesc">
    ${details[index].description} 
    </textarea>
    </div>
  <button type="submit" class="btn btn-big" onclick="update(${index})">Update</button>
  </div>`;
    document.getElementById("form").innerHTML = editForm;
    
};


function update(index) {
    let newTitle = document.getElementById('newTitle');
    let newDes = document.getElementById('NewDesc');

var input = document.getElementById("picture");
input.addEventListener("change", function() {
    var file = input.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      var imgData = reader.result;
    }
    reader.readAsDataURL(file);
});

    
    details[index] = {
        title: newTitle.value,
        description: newDes.value,
        blogimage: imgData
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
    window.location.href="../index.html";
},5000);
}
