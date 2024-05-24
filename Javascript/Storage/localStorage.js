localStorage.setItem("Bienvenida","Hola");// Se guarda con una clave/nombre ("Bienvenida") y el valor a guardar ("Hola")
localStorage.setItem("EsValido",true);
localStorage.setItem("Numero",20);
let Mensaje = localStorage.getItem ("Bienvenida");
let Valido = localStorage.getItem ("EsValido");
let Num = localStorage.getItem ("Numero");
alert (Mensaje);
alert (Valido);
alert (Num);
//Los datos guardados en lcoalStorage quedan guardados de forma indefinida persistiendo el cierre de navegador y reinicio de SO
