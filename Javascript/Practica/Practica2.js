const DateTime = luxon.DateTime;
const inicial = DateTime.fromObject({
  day: 25,
  month: 9,
  year: 1999,
  hour: 3,
  minute: 20,
  second: 32
},{
  zone: "America/Buenos_Aires",
  numberingSystem: "beng"
});
const gigasecond = 1000000000;
const oneGigasecondLater = inicial.plus({
  seconds: gigasecond
});
alert(oneGigasecondLater);

/* Este aproach no es necesario y lo sigo desarrollando para tratar de hacer un nuevo ejecicio para dado un numero x
en segundos devolver una fecha para poder sumarle a otra, mas abajo se desarrollara la consigna de manera correcta */
const inicial2 = new Date(1999,8,25,3,20,32);
const segundos = 60;
const minutos = 60;
const horas = 24;
const dias = 365.25;
let mesesnb = [31,28,31,30,31,30,31,31,30,31,30,31];
let mesesb = [31,29,31,30,31,30,31,31,30,31,30,31];
for(let c = 1;c < 12;c++){
  mesesnb[c] += mesesnb[c-1];
  mesesb[c] += mesesb[c-1];
}
function maxcm (num,mult){
  let entero = Math.floor(num/mult);
  let resto = num % mult;
  return {Entero: entero,Resto: resto};
};
function padStart(str, targetLength, padString) { // Tengo que hacer esta funcion porque no esta disponible para mi entorno
  targetLength = targetLength >> 0; // convertir a entero positivo
  padString = String((typeof padString !== 'undefined' ? padString : ' '));
  if (str.length > targetLength) {
      return String(str);
  } else {
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length);
      }
      return padString.slice(0, targetLength) + String(str);
  }
};
alert("El maximo multiplo de 25 con 6 es: " + maxcm(25,6).Entero + " y el resto es: " + maxcm(25,6).Resto);
function fechear (dato){
  let anos = segundos*minutos*horas*dias;
  ano = maxcm(dato,anos).Entero;
  let resto = maxcm(dato,anos).Resto;
  resto /= segundos*minutos*horas;
  let esBiciesto = (ano % 4) == 0;
  let mes;
  let dia = Math.floor(resto);
  resto -= dia;
  if(esBiciesto){
    for(let c = 0;c < 12;c++){
      if(mesesb[c] >= dia){
        mes = c;
        break;
      }
    }
    dia -= (mes > 0 ? mesesb[mes - 1] : 0);
  }else{
    for(let c = 0;c < 12;c++){
      if(mesesnb[c] >= dia){
        mes = c;
        break;
      }
    }
    dia -= (mes > 0 ? mesesnb[mes - 1] : 0);
  }
  resto *= horas;
  let hora = maxcm(resto,1).Entero;
  resto = maxcm(resto,1).Resto;
  resto *= minutos;
  let minuto = maxcm(resto,1).Entero;
  resto = maxcm(resto,1).Resto;
  resto *= segundos;
  let segundo = maxcm(resto,1).Entero;
  alert(ano)
  /* const result = new Date(ano,mes,dia,hora,minuto,segundo); Esto funcioanria pero js te cambia el ano 31 por 1931
  a menos que uses especificamente el otro modo de hacer fechas que voy a hacer */
  function hacerFecha(ano,mes,dia,hora,minuto,segundo){ /* En JavaScript, cuando defines una variable dentro del ámbito
  de una función con el mismo nombre que una variable global o externa a esa función, la variable local tendrá prioridad
  dentro del contexto de esa función. Esto significa que al usar year dentro de la función, se referirá a la variable local
  definida como parámetro de la función, no a la variable global que tenga el mismo nombre.*/
    let anoString = ano.toString().padStart(4,"0"); /* Asegura que el año tenga cuatro dígitos, añadiendo ceros a
    la izquierda si es necesario */
    let mesString = mes.toString().padStart(2,"0");
    let diaString = dia.toString().padStart(2,"0");
    let horaString = hora.toString().padStart(2,"0");
    let minutoString = minuto.toString().padStart(2,"0");
    let segundoString = segundo.toString().padStart(2,"0");
    let fechaString = `${anoString}-${mesString}-${diaString}T${horaString}:${minutoString}:${segundoString}`;
    return fechaString;
  }
  const result = new Date(hacerFecha(ano,mes,dia,hora,minuto,segundo));
  return result;
}
let resultado = fechear(gigasecond);
alert(resultado);
