const boton3 = document.getElementById("Boton 3");
boton3.addEventListener("click",() => {
  Swal.fire({
    title: "Esta seguro de eliminar este producto?",
    showCancelButton: true,
    icon: "warning",
    confirmButtonText: "Si",
    cancelButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed){
      Swal.fire({
        title: "Borrado",
        icon: "succes",
        text: "El archivo se ha borrado"
      })
    }
  })
});
