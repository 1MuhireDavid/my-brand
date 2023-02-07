const form = document.getElementById("add-form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const image = document.getElementById("pic");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
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
});