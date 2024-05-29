const usuario1 = {
  Id: 1,
  Nombre: "Martin",
  Telefonos: {
    Trabajo: 12345,
    Celular: 54321
  }
};
const usuario2 = {
  Id: 2,
  Nombre: "Manuel",
  Telefonos: {
    Trabajo: 6789,
    Celular: 9876
  }
};

const {
  Id: Id_usuario1,
  Nombre: Nombre_usuario1,
  Telefonos: {
    Trabajo: Trabajo_usuario1,
    Celular: Celular_usuario1
  }
} = usuario1;
const {
  Id: Id_usuario2,
  Nombre: Nombre_usuario2,
  Telefonos: Telefonos_usuario2
} = usuario2;

alert(Id_usuario1);
alert(Nombre_usuario1);
alert(Trabajo_usuario1);
alert(Celular_usuario1);

alert(Id_usuario2);
alert(Nombre_usuario2);
alert(Telefonos_usuario2.Trabajo);
alert(Telefonos_usuario2.Celular);
