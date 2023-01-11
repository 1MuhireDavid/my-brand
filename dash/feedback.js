
// ============================= Global variables

let feedback=[]
let comments=[]
let details=[]

// ============================== Blogs for index page on Dashboard ===================================

function getBlog(){
    let Datas = localStorage.getItem("details");
    if (Datas) {
       details = JSON.parse(Datas);
    } else {
        setBlog();
    };
};
function setBlog() {
    localStorage.setItem("details", JSON.stringify(details));
};
function table2() {
    let details=JSON.parse(localStorage.getItem("details"));
    let table = `<table class="table">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">Title</th>
      <th class="col-4">Description</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].title}</td>
      <td>${details[i].description}</td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
table2();


// ============================== Contact Me Response ===================================
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

function table() {
    let feedback=JSON.parse(localStorage.getItem("feedback"));
    let table = `<table class="table">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">NAME</th>
      <th class="col-4">EMAIL</th>
      <th class="col-2">MESSAGE</th>
      <th class="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < feedback.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${feedback[i].name}</td>
      <td>${feedback[i].email}</td>
      <td>${feedback[i].content}</td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("messages").innerHTML = table;
};
table();

// ============================== comments ===================================
function getComments(){
  let data = localStorage.getItem("comments");
  console.log(data)
  if (data) {
    comments = JSON.parse(data);
  } else {
      setComments();
  };
};
function setComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
};
function table1(){
  let feedback=JSON.parse(localStorage.getItem("feedback"));
  let comments=JSON.parse(localStorage.getItem("comments"));
  let table = `<table class="table">
<thead>
  <tr>
    <th class="col-1">NO</th>
    <th class="col-3">Title</th>
    <th class="col-4">LIKES</th>
    <th class="col-2">COMMENTS</th>
    <th class="col-2">Delete</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < comments.length; i++){
      table = table + `<tr>
    <td>${i + 1}</td>
    <td>${details[i].title}</td>
    <td>${comments[i].likes}</td>
    <td>${comments[i].comment}</td>
    <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
  </tr> `;
  };
  table = table+`</tbody>
  </table>`;
  document.getElementById("comm").innerHTML = table;
  console.log("hello")
};
table1();

//=============================================logout=================


function logout(){
    window.setTimeout(function(){
      window.location.href="../homepage.html";
  },5000);
  }