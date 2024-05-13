function persona (nombre,edad,trabajo){
  this.nombre = nombre;
  this.edad = edad;
  this.trabajo = trabajo;
}
const per1 = new persona ("Homero",39,"nule");
const per2 = new persona ("Marge",36,"Ama de Casa");
if (per1.edad == per2.edad) {
  alert (per1.nombre + " y " + per2.nombre + " tienen la misma edad");
}else{
  if (per1.edad > per2.edad){
    let dif = per1.edad - per2.edad;
    if (dif == 1){
      alert (per1.nombre + " le lleva " + dif + " ano a " + per2.nombre);
    }else{
      alert (per1.nombre + " le lleva " + dif + " anos a " + per2.nombre);
      }
  }else{
    let dif = per2.edad - per1.edad;
    if (dif == 1){
      alert (per2.nombre + " le lleva " + dif + " ano a " + per1.nombre);
    }else{
      alert (per2.nombre + " le lleva " + dif + " anos a " + per1.nombre);
    }
  }
}
