// Esto deberia funcionar pero debido a que hay protocolos de seguridad que no permiten habrir archivos locales no peudo probar
const lista = document.getElementById("Listado");
fetch('/data.json')
.then((res) => res.json())
.then((data) =>{
  data.forEach((producto) =>{
    const li = document.createElement('li');
    li.innerHTML = `
    <h4>${producto.nombre}</h4>
    <p>${producto.precio}</p>
    <p>${producto.id}</p>
    `
    lista.append(li)
  })
});
