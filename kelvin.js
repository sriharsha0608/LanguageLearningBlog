const kelvin=273;
//kelvin is converted to celsius by subtracting 273 from it.
const celsius=kelvin-273;
console.log(`The temperature is ${celsius} degrees Celsius.`); // Output: The temperature is 0 degrees Celsius.
//Converting celsius to fahrenheit
let fahrenheit=(celsius*(9/5))+32;
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); //Output: The temperature is 32 degrees Fahrenheit.
let Newton=celsius*(33/100);
Newton=Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton.`); // Output: The temperature is 0 degrees Newton.
console.log(typeof Newton); //Output: number
console.log(typeof celsius); //Output: number
