let Formulario = document.getElementById ("Formulario");
Formulario.addEventListener ("submit",
function ValidarFormulario (e){
  e.preventDefault(); /* El metodo preventDefault no deja enviar el form al servidor por lo que combinado con ifs o switchs
  puede servir para prevenir errores en el envio dejando finalmente el envio cuando sea correcto */
});
