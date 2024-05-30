const usuario1 = {
  Id: 1,
  Nombre: "Martin",
  Edad: 24,
  Curso: "JS"
};
const usuario2 = {
  ...usuario1
};
console.log(usuario2);

const usuario3 = {
  ...usuario1,
  Curso: "React", // No se puede tener 2 propiedades con el mismo nombre y en tal caso prevalece la ultima declarada
  Email: "martinroma99@gmail.com" // Agregamos nueva propiedad
};
console.log(usuario3);
