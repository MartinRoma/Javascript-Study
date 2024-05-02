const nombres = ["Marcos","Juan","Silvia"]
const eliminar = (nombre) => {
  let index = nombres.indexOf (nombre);
  switch (index) {
  case -1 : // index devuelve -1 si no encontro
    break;
  default :
    nombres.splice (index,1);
    break;
    }
  }
eliminar("Juan");
alert (nombres);
