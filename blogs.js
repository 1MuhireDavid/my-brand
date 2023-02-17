const row = document.querySelector('.row');
//const url = "https://mybrand-backend-tv4i.onrender.com";


const url = "http://localhost:3000";
fetch(`${url}/posts`)
  .then(response => response.json())
  .then(posts => {
    posts.data.forEach(post => {
      const column = document.createElement('div');
      column.className = 'column';
      const image = document.createElement('img');
      image.src = post.imageUrl;
      image.alt = post.title;
      const heading = document.createElement('h4');
      heading.textContent = post.title;
      const content = document.createElement('p');
      content.textContent = post.description;
    //   const link = document.createElement('a');
    //   link.href = post.link;
    //   link.textContent = 'Read More';
    // Create comment box
    const commentBox = document.createElement('textarea');
    commentBox.placeholder = 'Add a comment...';
//     const likeIcon = document.createElement('div');
// likeIcon.classList.add('icons', 'like');
// likeIcon.innerHTML = '<i class="far fa-heart"></i><span id="span"></span>';
// likeIcon.addEventListener('click', () => {
//   // Handle like icon click
//   console.log(`User liked post ${post.id}`);
// });
      
      const commentBtn = document.createElement('button');
      commentBtn.textContent = 'Comment';
      commentBtn.addEventListener('click', () => {
         // Get comment input from comment box
         const comment = commentBox.value;
         if (comment) {
           // Handle comment input
           console.log(`User commented "${comment}" on post ${post.id}`);
           // Clear comment box after submitting comment
           commentBox.value = '';
         } else {
           alert('Please enter a comment');
         }
      });
      column.appendChild(image);
      column.appendChild(heading);
      column.appendChild(content);
    //   column.appendChild(link); 
      // column.appendChild(likeIcon);
      column.appendChild(commentBox);
      column.appendChild(commentBtn);
      row.appendChild(column);
    });
  })
  .catch(error => {
    console.error(error);
    alert('Unable to retrieve posts');
  });