let details=[]
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
function table() {
    let details=JSON.parse(localStorage.getItem("details"));
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
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].title}</td>
      <td id="desc">${details[i].description}</td>
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