const boton = document.getElementById("Boton");
boton.addEventListener("click",() => {
  Swal.fire({
    title: "Genial",
    text: "Hiciste click",
    icon: "success",
    confirmButtonText: "Ok"
  })
});
