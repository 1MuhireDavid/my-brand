
// ============================= Global variables

let feedback=[]
let comments=[]
let details=[]

// ============================== Blogs for index page on Dashboard ===================================
//const url = "https://mybrand-backend-tv4i.onrender.com";
const url = "http://localhost:3000";
function getBlog(){
  fetch(`${url}/posts`)
      .then((response) => response.json())
      .then(data => {
          details = data;
          table2();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    
};
function table2() {
  console.log(details.data)
 var table = `<table class="table">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">Title</th>
      <th class="col-4">Description</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.data.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details.data[i].title}</td>
      <td id="desc">${details.data[i].description}</td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
// function getBlog(){
//     let Datas = localStorage.getItem("details");
//     if (Datas) {
//        details = JSON.parse(Datas);
//     } else {
//         setBlog();
//     };
// };
// function setBlog() {
//     localStorage.setItem("details", JSON.stringify(details));
// };
// function table2() {
//     let details=JSON.parse(localStorage.getItem("details"));
//     let table = `<table class="table">
//   <thead>
//     <tr>
//       <th class="col-1">NO</th>
//       <th class="col-3">Title</th>
//       <th class="col-4">Description</th>
//     </tr>
//   </thead>
//   <tbody>`;
//     for (let i = 0; i < details.length; i++){
//         table = table + `<tr>
//       <td>${i + 1}</td>
//       <td>${details[i].title}</td>
//       <td>${details[i].description}</td>
//     </tr> `;
//     };
//     table = table+`</tbody>
//     </table>`;
//     document.getElementById("table").innerHTML = table;
// };
// table2();
getBlog();
getData()
table2();

// ============================== Contact Me Response ===================================
function getData(){
    // let Data = localStorage.getItem("feedback");
    // if (Data) {
    //     feedback = JSON.parse(Data);
    // } else {
    //     setData();
    // };
    fetch(`${url}/contactUs`)
      .then((response) => response.json())
      .then(datas => {
          feedback = datas;
          table();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

};
// function setData() {
//     localStorage.setItem("feedback", JSON.stringify(feedback));
// };

function table() {

  console.log(feedback.data)
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
    for (let i = 0; i < feedback.data.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${feedback.data[i].name}</td>
      <td>${feedback.data[i].email}</td>
      <td>${feedback.data[i].description}</td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})"><i class="fa-solid fa-trash"></i></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("messages").innerHTML = table;
};
table();

function deleteData(index) {
  // details.splice(index, 1);
  // setData();

  fetch(`${url}/contactUs/${feedback.data[index]._id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    feedback.data.splice(index, 1);
    table();
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // console.log('delete work')
  // console.log(details)
};
//=============================================logout=================


function logout(){
    window.setTimeout(function(){
      window.location.href="../index.html";
  },5000);
  }