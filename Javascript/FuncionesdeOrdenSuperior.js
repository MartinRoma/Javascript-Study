function MayorQue (n){
  return (m) => m > n; // Devuelve una Funcion que toma m
}
let MayorQueDiez = MayorQue (10);
alert (MayorQueDiez (12));
