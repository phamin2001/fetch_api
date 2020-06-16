document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
// function getText() {
//   fetch('test.txt')
//     .then(function (res) {
//       return res.text();
//     })
//     .then(function (data) {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// Arrow function
// function getText() {
//   fetch('test.txt')
//     .then(res => res.text())
//     .then(data => {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(err => console.log(err));
// }

// Handeling Error with Fetch
function getText() {
  fetch('test.txt')
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `It all went horribly wrong!!: ${res.status} ${res.statusText}`
        );
      else return res.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// Get local json data
// function getJson() {
//   fetch('post.json')
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function (post) {
//         output += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// Arrow function
// function getJson() {
//   fetch('post.json')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       let output = '';
//       data.forEach(function (post) {
//         output += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(err => console.log(err));
// }

// Handeling Error with Fetch
function getJson() {
  fetch('post.json')
    .then(handleErrors)
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Get from external url
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function (user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// Arrow function
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       let output = '';
//       data.forEach(function (user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(err => console.log(err));
// }

// Handling Error with Fetch
function getExternal() {
  fetch('https://api.github.com/users')
    .then(handleErrors)
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach((user) => (output += `<li>${user.login}</li>`));
      document.getElementById('output').innerHTML = output;
    })
    .catch(console.log);
}

// Error Function
function handleErrors(res) {
  if (!res.ok)
    throw new Error(
      `It all went horribly wrong!!: ${res.status} ${res.statusText}`
    );
  else return res.json();
}
