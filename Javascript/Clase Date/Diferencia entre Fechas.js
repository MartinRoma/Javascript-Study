const navidad2024 = new Date("December 25, 2024");
const hoy = new Date();
dif = navidad2024.getTime()-hoy.getTime();
let diferencia = Math.ceil(dif/(1000*60*60*24));
alert (`Faltan ${diferencia} dias para Navidad`);
