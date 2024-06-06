const boton = document.getElementById("Boton");
boton.addEventListener("click",() => {
  Toastify({
    text: "Probando",
    duration: 3000,
    gravity: "bottom",
    position: "left",
    style: {
      background: "linear-gradient(to right,#15F2FC,#FAB86E)"
    },
    className: "miToasty", // Definida la clase para usar en otros momentos a traves de CSS
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast",
        duration: 3000,
        gravity: "bottom",
        position: "left",
        style: {
          background: "linear-gradient(to right,#15F2FC,#FAB86E)"
        }
      }).showToast()
    }
  }).showToast();
});

const boton2 = document.getElementById("Boton2");
boton2.addEventListener("click",() => {
  Toastify({
    text:"Click aqui para ir a Youtube",
    duration: 3000,
    destination: "https://www.youtube.com/",
    newWindow: true
  }).showToast();
});
