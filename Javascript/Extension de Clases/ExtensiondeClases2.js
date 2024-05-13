class Ver1 {
  constructor (name) {
    this.name = name;
  }
  hi(){
    alert (`Have a good day ${this.name}`);
  }
}
let ex1 = new Ver1 ("Marcos");
class Ver2 extends Ver1{
  constructor (name, lastname){
    super (name); // Llama al constuctor padre (Ver1) y ejecuta todo el codigo dentro para su Hijo (Ver2) heredandolo
    this.lastname = lastname;
  }
  hi2 (){
    alert ("Hi " + this.name + " " + this.lastname);
  }
}
const ex2 = new Ver2 ("Marcos", "Alonso");
ex1.hi();
ex2.hi2();
