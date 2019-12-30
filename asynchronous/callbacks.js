// Array mimicks blog posts on a server.
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];


// Gets blog posts
function getPosts() {
  // Use set timeout to mimick fetching blog posts from server.
  // Parameters: Callout arrow function, 1 second delay.
  setTimeout( changeInnerHTML , 1000);
}

let changeInnerHTML = function () {
  let output = '';
  posts.forEach((post, index) => {
    // Append
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;
}

// Creating blog posts
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
