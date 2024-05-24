localStorage.setItem("Bienvenida","Hola");
localStorage.setItem("EsValido",true);
localStorage.setItem("Numero",20);
for (let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);
  alert ("Clave: " + clave);
  alert ("Valor: " + localStorage.getItem(clave));
}
