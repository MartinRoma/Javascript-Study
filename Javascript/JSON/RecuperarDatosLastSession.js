let usuario;
let usuarioEnLS = localStorage.getItem("usuario");
if(usuarioEnLS){
  usuario = usuarioEnLS;
}else{
  usuario = prompt("Ingrese Usuario");
  localStorage.setItem("usuario",usuario);
};
alert("Hola " + usuario);
