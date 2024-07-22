const lista = document.getElementById("Listado");
// async function pedirPosts(){} Esta manera de trabajar con async es valida asi como la sieguiente
const pedirPosts = async () =>{
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();
  data.forEach((post) =>{
    const li = document.createElement('li');
    li.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    `
    lista.append(li)
  })
}
pedirPosts();
