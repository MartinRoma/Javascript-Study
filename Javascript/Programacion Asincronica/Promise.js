const eventoFuturo = (res) => {
  return new Promise((resolve,reject) => {
    if(res === true){
      resolve("Promesa resuelta");
    }else{
      reject("Promesa rechazada")
    }
  })
}
console.log(eventoFuturo(true));
console.log(eventoFuturo(false));/*El error Uncaught (in promise) Promesa rechazada se produce porque la promesa se rechaza
y no hay un bloque catch para manejar el rechazo. En JavaScript, cuando una promesa se rechaza y no hay ningún controlador
de errores, el error se propaga y aparece en la consola*/

const eventoFuturo2 = (res) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      res ? resolve("Promesa resuelta") : reject("Promesa rechazada")
    },5000)
  })
};
console.log(eventoFuturo2(true)); // Mostrara pending
console.log(eventoFuturo2(false)); // Mostrara pending
setTimeout(() => {
  console.log(eventoFuturo2(true)); // Mostrara pending, al ejecutarse eventoFuturo2 cuando la llama el console.log y no antes
  console.log(eventoFuturo2(false)); // Mostrara pending, al ejecutarse eventoFuturo2 cuando la llama el console.log y no antes
},6000);
let x = eventoFuturo2(true);
let y = eventoFuturo2(false);
setTimeout(() => {
  console.log(x); // Mostrara resultado al haberse resuelto la promesa anteriormente para la asignacion
  console.log(y); // Mostrara resultado al haberse resuelto la promesa anteriormente para la asignacion
},6000);
console.log(x); // Mostrara pending al ejecutarse el console.log antes de que salga del task queue
console.log(y); // Mostrara pending al ejecutarse el console.log antes de que salga del task queue

eventoFuturo2(true)
.then((result) => {
  console.log(result)
})
.catch((error) => { // Esta permitido concatenar then y catchs para resolver todos los escenarios dependientes de la promesa
  console.log(error)
})
.finally(() => { // finally es un metodo que recibe una funcion para ejecutar al final de la secuencia independiente del result
  console.log("Proceso terminado")
});
eventoFuturo2(false)
.then((result) => {
  console.log(result)
})
.catch((error) => { // Esta permitido concatenar then y catchs para resolver todos los escenarios dependientes de la promesa
  console.log(error)

})
.finally(() => { // finally es un metodo que recibe una funcion para ejecutar al final de la secuencia independiente del result
  console.log("Proceso terminado")
});
eventoFuturo2(true); // Mostrara Promesa resuelta al haber agregado un catch para que se ejecute primero lo asincronico
eventoFuturo2(false); // Mostrara Promesa rechazada al haber agregado un catch para que se ejecute primero lo asincronico
