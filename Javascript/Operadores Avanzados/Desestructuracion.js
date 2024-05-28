const usuario1 = {
  Id: 1,
  Nombre: "Martin"
};
 const { // Esto sirve para declarar y asignar varias variables que saldran de un objeto
   Id, // Los nombres de las variables deben ser identicos a los del objeto, no puedo usar id si el objeto dice Id
   Nombre
 } = usuario1;

 alert("Id: " + Id + ", Nombre: " + Nombre);

const {
  Telefono
} = usuario1;

  alert(Telefono); // Devuelve undefined

const usuario2 = {
  ID: 2,
  NOMBRE: "Martin",
  Telefono: {
    Cel: 12345,
    Trabajo: 54321
  }
};

const {
  ID,
  NOMBRE,
  Telefono: {
    Cel,
    Trabajo
  }
} = usuario2;

alert("El celular es: " + Cel);
