let boton = document.getElementById('Boton');
let ban1 = 0;
let ban2 = 0;
let ban3 = 0;
let ban4 = 0;
let ban5 = 0;
let ban6 = 0;
boton.onclick = () => {
  if (ban1 == 0){
    alert ("onclick");
    ban1++;
  }
} // Para cuando se clickea el objeto
boton.onmousemove = () => {
  if (ban2 == 0){
    alert ("onmousemove");
    ban2++;
  }
} // Se activa y mantiene activo mientras el mouse se mueve sobre el objeto
boton.onmouseover = () => {
  if (ban3 == 0){
    alert ("onmouseover");
    ban3++;
  }
} // Se activa cuando el mouse se mueve sobre el objeto
boton.onmouseout = () => {
  if (ban4 == 0){
    alert ("onmouseout");
    ban4++;
  }
} // Se activa cuando el mouse se va de sobre el objeto
boton.onmousedown = () => {
  if (ban5 == 0){
    alert ("onmousedown");
    ban5++;
  }
} // Se activa cuando el mouse arrastra el objeto
boton.onmouseup = () => {
  if (ban6 == 0){
    alert ("onmouseup");
    ban6++;
  }
} // Se activa cuando el mouse deja de arrastrar el objeto
