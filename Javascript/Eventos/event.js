let Formulario = document.getElementById('Formulario');
Formulario.addEventListener ("submit", ValidarFormulario);
function ValidarFormulario (e){
  e.preventDefault();
  let form = e.target; // Crea en form una referencia al elemento que origino el evento, el formulario que ha sido enviado
  alert (form.children[0].value); // Printea el valor del primer hijo del Formulario (<input type="text">)
  alert (form.children[1].value); // Printea el valor del segundo hijo del Formulario (<input type="number">)
}
