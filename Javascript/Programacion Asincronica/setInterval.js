let counter = 0;
const interval = setInterval(() => {
  counter++;
  alert("Tik " + counter);
  if (counter == 5){
    clearInterval(interval);
    alert("Se removio el intervalo");
  }
},5000);
