let usuario;
let usuarioEnLS = localStorage.getItem("usuario");
if(usuarioEnLS){ /* Si se hace un if de una variable, JS dara por verdadero que no este vacia, mientas
no sea un valor asociable a false (false,0,etc) */
  usuario = usuarioEnLS;
}else{
  usuario = prompt("Ingrese Usuario");
  localStorage.setItem("usuario",usuario);
};
alert("Hola " + usuario);
