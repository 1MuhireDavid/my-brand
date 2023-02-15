let token = localStorage.getItem("token", "true");
const data = document.querySelector('[data-id]');
//console.log(data.dataset.id);


// const dataSignedIn = document.querySelector('[data-id]')
// console.log(dataSignedIn);

 if (token) {
   data.dataset.signedin = "false";
 } else {
   data.dataset.signedin = "true";
 }