const boton = document.querySelector("#Boton");
const popup = document.getElementById("Popup");

boton.addEventListener("click", () => {
  popup.classList.add("popup-active")

  setTimeout(() => {
    popup.classList.remove("popup-active")
  },4500)
});

for(let letra of "hola"){
  setTimeout(() => {
    console.log(letra)
  },1000);
};
for( let letra of "mundo"){
  setTimeout(() => {
    console.log(letra)
  },3500);
};
/*El setTimeout aplicara un delay para el console.log de cada letra pero al estar en un buble for todas las acciones se ejecutan
al mismo tiempo por lo que solo apareceran todas las letras juntas despues del delay puesto 1 seg para hola y 3,5 para mundo */
