sessionStorage.setItem ("Lista",[1,2,3]);
sessionStorage.setItem ("NoEsValido",false);
sessionStorage.setItem ("Email","martinroma99@gmail.com");
localStorage.setItem("Bienvenida","Hola");
localStorage.setItem("EsValido",true);
localStorage.setItem("Numero",20);
alert (localStorage.getItem("Bienvenida"));
localStorage.removeItem("Bienvenida");
for (let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);
  alert ("Clave: " + clave);
  alert ("Valor: " + localStorage.getItem(clave));
};
sessionStorage.clear();
for (let i = 0; i < sessionStorage.length; i++){
  let clave = sessionStorage.key(i);
  alert ("Clave: " + clave);
  alert ("Valor: " +sessionStorage.getItem(clave));
};
