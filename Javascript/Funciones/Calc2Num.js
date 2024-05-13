function calc2num (num1, num2, operador){
  num1 = parseFloat(num1); // Convertir a float el num1, ya que lo que ingresa los prompt son siempre string
  num2 = parseFloat(num2);
  switch (operador) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "**":
      return num1 ** num2;
      break;
    default:
      return "Operacion Invalida";
      break;
  }
}
for (let condicional = ""; condicional != "no"; ){ /* Ver que el for separa su contenido con ; en lugar de ,
resulta algo especifico de los for */
  let op = prompt ("Ingrese Operador de su Operacion (+, -, *, /, **)");
  let n1 = prompt ("Ingrese Primer Numero");
  let n2 = prompt ("Ingrese Segundo Numero");
  alert (calc2num (n1, n2, op));
  condicional = (prompt ("Desea seguir haciendo operaciones?")).toLowerCase();
}/* Cabe destacar tambien que el uso del for sin incrementador como se ve aqui con un "; " al final deberia ser usado
simplemente un while */
