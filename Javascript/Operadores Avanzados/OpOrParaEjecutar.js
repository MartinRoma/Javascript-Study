const usuario1 = {
  id: 24,
  nombre: "Martin Roma"
};
const usuario2 = null;
alert(usuario1 || "El usuario no existe");// El Or hara que si el valor de la izquiera es falsy se de el valor de la derecha
alert(usuario2 || "El usuario no existe");
alert(usuario3 || "El usuario no existe");// Las variables no declaradas no triggerean esto pues dan un error y no ejecutan
