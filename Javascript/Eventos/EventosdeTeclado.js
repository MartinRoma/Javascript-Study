let input1 = document.getElementById('Nombre');
let input2 = document.getElementById('Edad');
input1.onkeyup = () => {
  alert ("onkeyup");
}; // Se activa al soltar una tecla
input2.onkeydown = () => {
  alert ("onkeydown");
}; // Se activa al presionar una tecla
