const productos = [{
  id: 1,
  producto: "Arroz",
  precio: 20,
},{
  id: 2,
  producto: "Fideos",
  precio: 10,
},{
  id: 3,
  producto: "Crema",
  precio: 30,
},{
  id: 4,
  producto: "Pan",
  precio: 5,
}];

const guardarLocal = (clave,valor) => {
  localStorage.setItem(clave,valor);
};

for(const producto of productos){
  guardarLocal(producto.id,JSON.stringify(producto));
}
// Almacenar producto por producto
guardarLocal("listadeProd",JSON.stringify(productos));
// Almacenar toda la lista
alert(JSON.parse(localStorage.getItem("1")));
alert(JSON.parse(localStorage.getItem("listadeProd")));
