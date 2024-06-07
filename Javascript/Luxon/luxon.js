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

dt = dateTime.fromISO("2017-05-15T08:30:00");
alert(dt);

const now = dateTime.now();
alert(now.toString());
let nowarr = [];
nowarr.push(now.year);
nowarr.push(now.month);
nowarr.push(now.day);
nowarr.push(now.second);
nowarr.push(now.weekday);
alert(nowarr.join(","));
alert(now.zoneName);
alert(now.daysInMonth);

alert(now.toLocaleString(dateTime.DATE_SHORT));
alert(now.toLocaleString(dateTime.DATE_MED));
alert(now.toLocaleString(dateTime.DATE_MED_WITH_WEEKDAY));
alert(now.toLocaleString(dateTime.DATE_FULL));
alert(now.toLocaleString(dateTime.DATE_HUGE));

const suma = now.plus({
  hours: 5,
  minutes: 16
});
alert(suma.toLocaleString(dateTime.DATETIME_SHORT));

const resta = now.minus({
  hours: 5,
  minutes: 16
});
alert(resta.toLocaleString(dateTime.DATETIME_SHORT));

const set = now.set({
  hour: 3
});
alert(set.toLocaleString(dateTime.DATETIME_SHORT));

const duration = luxon.Duration;
const dur = duration.fromObject({
  hours: 3,
  minutes: 16
});
alert(dur.hours);
alert(dur.seconds);
const suma2 = now.plus(dur);
alert(suma2.toLocaleString(dateTime.DATETIME_SHORT));

const interval = luxon.Interval;
const dias15 = dateTime.local(2024,6,22);
const inter = interval.fromDateTimes(now,dias15);
alert(inter.length("days"));
