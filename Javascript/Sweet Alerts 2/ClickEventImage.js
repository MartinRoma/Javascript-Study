const boton2 = document.getElementById("Boton 2");
boton2.addEventListener("click",() => {
  Swal.fire({
    title: "Genial",
    text: "Aca esta tu imagen",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom Image",
    confirmButtonText: "Ok"
  })
});
