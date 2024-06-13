function palindromo(palabra){
  let mitad = Math.floor(palabra.length/2);
  let bandera = 0;
  for(let contadorInicio = 0, contadorFinal = palabra.length - 1; contadorInicio <= mitad && bandera < 2; contadorInicio++, contadorFinal--){
    if(palabra[contadorInicio] != palabra[contadorFinal]){
      bandera++;
      let contadorInicioAux = contadorInicio + 1;
      if(palabra[contadorInicioAux] == palabra[contadorFinal]){
        contadorFinal++;
      }else{
        let contadorFinalAux = contadorFinal--;
        if(palabra[contadorInicio] == palabra[contadorFinalAux]){
          contadorInicio++;
        }else{bandera++;}
      }
    }
  }
  switch (bandera) {
    case 0:
      alert("Es Palindromo");
      break;
    case 1:
      alert("Es Casi Palindromo");
      break;
    default:
    alert("No es Palindromo");
    break;
  }
}
let palabra = prompt("Ingrese una palabra para ver si es palindromo").toLowerCase();
palindromo(palabra);
