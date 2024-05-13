const perros = [{Nombre: "Milo", Edad: 5, Raza: "Golden"}, {Nombre: "Chiqui", Edad: 10, Raza: "Chihuahua"}, {Nombre: "Rubi", Edad: 15, Raza: "Golden"}];
const GoldensJovenes = perros.filter (element => element.Raza == "Golden" && element.Edad > 5);
alert (GoldensJovenes[0].Nombre);
