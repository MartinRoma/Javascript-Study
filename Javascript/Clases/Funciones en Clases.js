class persona{
  constructor (nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
  }
  hola(){
    alert ("Hola " + this.nombre + " " + this.apellido);
  }
}
const per1 = new persona ("Homero","Simpson");
per1.hola();
