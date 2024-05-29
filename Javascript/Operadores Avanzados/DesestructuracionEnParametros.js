const producto = {
  Id: 10,
  Nombre: "Curso JS",
  Precio: 12500
};

const desestructuracion = (item) => {
  const {Id,Nombre} = item;
  alert("Id: " + Id + ", Nombre: " + Nombre);
};

desestructuracion (producto);

const desestructurar = ({Id,Nombre}) => {
  alert("Id: " + Id + ", Nombre: " + Nombre);
};

desestructurar (producto);

window.addEventListener("click",({x,y}) => {
  alert(x + ", " + y);
});
