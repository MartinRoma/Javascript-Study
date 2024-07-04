fetch("https://jsonplaceholder.typicode.com/posts",{
  method: "POST",
  body: JSON.stringify({
    title: "Martin",
    body: "Post de prueba",
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
.then((response) => response.json())
.then((data) => console.log(data));
