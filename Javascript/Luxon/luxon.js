const dateTime = luxon.DateTime;
let dt = dateTime.local(2022,1,25,12,10);
alert(dt);
dt = dateTime.fromObject({
  day: 6,
  hour: 17,
  month: 6
},{
  zone: "America/Buenos_Aires",
  numberingSystem: "beng"
});
alert(dt);
