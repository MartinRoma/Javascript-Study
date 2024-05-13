const cursos = [{nombre : "JS", precio: 15000}, {nombre : "React", precio : 10000}];
let cond = prompt ("Ingrese que curso desea ver el precio");
const resultado = cursos.find (element => element.nombre === cond);
alert ("El precio de la busqueda es " + resultado.precio);
