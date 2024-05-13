class Animal {
  constructor (familia, nombre){
    this.familia = familia;
    this.nombre = nombre;
  }
  reporte (){
    alert (`${this.nombre} pertenece a la familia ${this.familia}`);
  }
}
class Fungi extends Animal {
  reporte(){
    alert (`el fungi ${this.nombre} pertenece a la familia ${this.familia}`);
  }
}
const hongo1 = new Fungi ("Cloron", "Amancita");
hongo1.reporte();
