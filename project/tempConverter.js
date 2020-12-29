// the variable below store temp in kelvin
const kelvin = 300;

// To get the variable to celsus, we just have to minus the value in kelvin by 273
const celsius = kelvin - 273;

// To get the variable to Fahrenheit, we just have to apply the following operation to celsius
let fahrenheit = celsius * (9/5) + 32;

// Methode to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33/100)
newton = Math.floor(newton);


console.log(`The temperature of ${celsius}° celsius is equal to ${newton} newtons `);
