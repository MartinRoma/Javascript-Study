function Aplicar (arr, fun){
  for (const cont of arr){
    fun(cont)
  }
}
const saludos = ["Hola", "Hello", "Salam", "Aloha", "Namaste"];
Aplicar (saludos, alert);
