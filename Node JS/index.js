//const generateRandonNumber = required('./notes'); //(.js) is not needed importing funciton from different source.

console.log(`Random Number: ${generateRandomNumber()}`);

const {generateRandomNumber, celciousToFahrenheit} = required('./Notes'); //(.js) is not needed  

console.log(`celsious to Fahrenhiet: ${celciousToFahrenheit(32)}`);