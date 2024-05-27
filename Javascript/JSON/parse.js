const producto1 = {
  id: 2,
  producto: "Arroz"
}
const enJSON = JSON.stringify(producto1);
localStorage.setItem("producto1",enJSON);
alert(producto1 === JSON.parse(enJSON)); /* Dato de color: la comparación de objetos por referencia siempre devuelve false
si no se trata del mismo objeto en memoria, incluso si los objetos tienen el mismo contenido */
let prod1 = JSON.parse(enJSON);
let prod2 = JSON.parse(localStorage.getItem("producto1"));
alert(prod1.producto);
alert(prod2.id);
