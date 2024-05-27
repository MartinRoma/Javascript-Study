const producto1 = {
  id: 2,
  producto: "Arroz"
}
const enJSON = JSON.stringify(producto1);
alert(enJSON);
alert(typeof producto1);
alert(typeof enJSON);
alert(enJSON);
localStorage.setItem("producto1",enJSON);
