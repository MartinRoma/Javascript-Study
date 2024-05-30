const numeros = [1,7,8,6,4,23,9,8,11,55,44,76];
alert(Math.max(numeros)); // Math.max como otras funciones toman diferentes numeros separados con "," pero no listas
alert(Math.max(...numeros));

const nombres1 = ["Martin","Eliana"];
const nombres2 = ["Juan","Benedicto"];
const nombres = [...nombres1,...nombres2]; // Se puede usar para juntar 2 arrays
alert(nombres);

const nombresObj = {
  ...nombres
};
/* alert(nombresObj.0); Esto no funciona debido a que cuando se propaga un array en un objeto los indices pasan a ser propiedades
del objeto, pero las propiedades numericas no son una forma de tarbajar con objetos por lo que hay que acceder con [] */
alert(nombresObj[0]);
