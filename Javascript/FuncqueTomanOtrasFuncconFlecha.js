function Aplicar (arr, fun){
  for (const cont of arr){
    fun(cont)
  }
}
const doble = [];
const numeros = [1,2,3,4];
Aplicar (numeros, (cont) => {doble.push (cont*2);});
alert (doble);
