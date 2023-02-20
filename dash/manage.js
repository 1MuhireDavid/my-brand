let details=[]
//const url = "https://mybrand-backend-tv4i.onrender.com";
const url = "http://localhost:3000";
function getData(){
     fetch(`${url}/posts`)
      .then((response) => response.json())
      .then(data => {
          details = data;
          table();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
};
getData();
function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th class="col-1">NO</th>
      <th class="col-3">Title</th>
      <th class="col-4">Description</th>
      <th class="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.data.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details.data[i].title}</td>
      <td id="desc">${details.data[i].description}</td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})"><i class="fa-solid fa-trash"></i></button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};

table();

//=============================================logout=================


function logout(){
    window.setTimeout(function(){
  localStorage.removeItem("token");
      window.location.href="../index.html";
  },5000);
  }