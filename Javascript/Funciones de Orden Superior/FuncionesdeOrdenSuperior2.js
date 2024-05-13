function AsignarOperacion (op){
  switch (op){
    case "suma":
    return (a,b) => a+b;
    break;
    case "resta":
    return (a,b) => a-b;
    break;
    default:
    return (a,b) => "No contemplo la operacion";
    break;
  }
}
let suma = AsignarOperacion ("suma");
let resta = AsignarOperacion ("resta");
let div = AsignarOperacion ("div");
alert (suma (1,2));
alert (resta (1,2));
alert (div (1,2));
