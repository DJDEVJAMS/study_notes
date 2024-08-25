// Create a package.json file. npm init -y <-- -y skips the questions 
//Package.JSON Created
// {
//     "name": "node-js",
//     "version": "1.0.0",
//     "main": "Notes.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "description": ""
//   }
// Create an entry point file. --> index.JS created. (using notes.js for this research)
console.log('Hello World');
//no console.log(window)window is not an object in Node JS
console.log(global);
//no console.log(document) no document object in Node JS. 
console.log(process);

function generateRandomNumber(){ // funciton created to make randon number
    return Math.floor(Math.random() * 100 ) + 1
}; // we want to export this function for other documents. 

module.exports = generateRandomNumber; // common js -> Default Export one item at a time.

function celciousToFahrenheit(celcius) {
    return (celcius * 9) / 5 +32;
}

module.exports = {generateRandomNumber,celciousToFahrenheit, }; // export tow funcitons at once. 