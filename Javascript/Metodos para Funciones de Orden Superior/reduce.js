const numeros = [1,2,3,4,5];
const totalsum = numeros.reduce ((acumulador,elemento) => acumulador + elemento, 0); // El 0 del final inicia el acumulador en 0
alert (totalsum);
