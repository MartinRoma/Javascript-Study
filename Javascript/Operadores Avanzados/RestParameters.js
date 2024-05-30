function sumar(...numeros){ /* Al usar ... se le indica a la funcion que tome un numero variable de parametros que pondra
finalmente en una lista, donde todas las variables que se le pasen formaran parte: sumar(1,2) dara [1,2] para trabajar */
  let suma = 0;
  for(let numero of numeros){
    suma += numero;
  }
  return suma;
};

alert(sumar(1,2,3));
alert(sumar(4,5));
alert(sumar(6));
alert(sumar());
