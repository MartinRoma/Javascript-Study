const usuario1 = {
  Id: 1,
  Nombre: "Martin"
};
const usuario2 = null;

alert(usuario1?.Nombre || "El usuario no existe"); /* Al agregar ? primero ve si puede acceder a la propiedad del objeto si no
aplicara el otro lado del Or*/
alert(usuario2?.Nombre || "El usuario no existe"); // No puede ingresar a la propiedad de un null entonces falsy
try{ // El codigo try catch funciona poniendo codigo que puede fallar dentro del try
  alert(usuario3?.Nombre || "El usuario no existe"); // Entra el error undefined usuario3 y no ejecuta el codigo
}catch(e){ // Si el codigo try no tuvo error sigue de largo, si no el catch lo caza y ejecuta su codigo de adentro
  alert("Se produjo un error");
};

const usuario4 = {
  Id: 2,
  Nombre: "Martin",
  Cursos: {
    JS: "Aprobado"
  }
};

alert(usuario1?.Cursos?.JS || "La propiedad no existe");
alert(usuario4?.Cursos?.JS || "La propiedad no existe");
