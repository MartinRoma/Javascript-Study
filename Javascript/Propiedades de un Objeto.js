const persona1 = {nombre: "Homero",apellido: "Simpson"};
alert ("nombre" in persona1);
for (const propiedad in persona1) { // el bucle for in es codigo especifico que sirve para recorrer objetos
  alert (persona1[propiedad]);// debe usarse [], el . no funciona
}
