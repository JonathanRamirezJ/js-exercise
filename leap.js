function leapYear(year) {
  var yearValid =  year % 4 === 0 && year % 100 !== 0 || year % 400 == 0 ? 'Año bisiesto' : 'No es año bisiesto'
  console.log(yearValid);
};

leapYear(1900);
