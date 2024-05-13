const supermercado = [{Item: "Manzana", Precio: 22, Cant: 5}, {Item: "Banana", Precio: 20, Cant: 10}, {Item: "Kiwi", Precio: 30, Cant: 20}];
let infla = 10;
const superprecioact = supermercado.map ((element) => {
  return {Item: element.Item, Precio: element.Precio * infla / 100 + element.Precio, Cant: element.Cant}
});
alert (superprecioact[1].Precio);
