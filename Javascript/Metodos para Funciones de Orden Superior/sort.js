const items = [{Nombre: "Helado", Precio: 22}, {Nombre: "Galletitas", Precio: 10}, {Nombre: "Mayonesa", Precio: 15}, {Nombre: "Picadillo", Precio: 5}];
items.sort ((a,b) => a.Precio - b.Precio); //Ordena por precio de menor a mayor
alert (items[0].Precio);
items.sort ((a,b) => {
  if (a.Nombre < b.Nombre){
    return -1;
  } if (a.Nombre > b.Nombre) {
    return 1;
  } else{
    return 0
  }
});// Ordena por Nombre alfabeticamente
alert (items[0].Nombre);
// La comparativa, sea por resta o comparacion, si se asocia a -1 significa que A deberia estar antes que B
