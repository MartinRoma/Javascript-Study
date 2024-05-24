sessionStorage.setItem ("Lista",[1,2,3]);
sessionStorage.setItem ("NoEsValido",false);
sessionStorage.setItem ("Email","martinroma99@gmail.com");
let lista = sessionStorage.getItem("Lista").split(",");/* Tanto localStorage como sessionStorage guardan los valores
 como strings por lohay que "devolverles" su tipo*/
let bandera = sessionStorage.getItem("NoEsValido")=="true";
let email = sessionStorage.getItem("Email");
alert (typeof sessionStorage.getItem("Lista"));
alert (typeof lista);
alert (typeof sessionStorage.getItem("NoEsValido"));
alert (typeof bandera);
alert (typeof sessionStorage.getItem("Email"));
alert (typeof email);
