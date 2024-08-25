console.log('hello world!');

// Varibles
// //var,let,const
// Var is not longer used
// let allows you to set a variable and change its value
// cosnt is a constant varible and can't be changed or reassibled. 
// always use cosnt  unless you know the variable  be reassigned. 

let scores = [];

score = 10;

console.log(score);

//Data Types
//String,Numbers,Boolean,Null, undefined and symbols

const namePerson = 'John';
//strings can have signle or double quotes but should be consitent in script.
const age = 30; // number
const rating = 4.5; //number
const isCool = true; //boolean
const x = null;
const y = undefined; let z; // are both undefield 

console.log(typeof age); //shows Data Types

// Single or Double Quotes
let singleQuoteString = 'Hello, Alice!';
let doubleQuoteString = "Hello, Bob!";

// Using backticks for interpolation
let nickname = 'Charlie';
let greeting = `Hello, ${nickname}!`; // Output: Hello, Charlie!

// Using backticks for multi-line string
let multiLineString = `This is a
multi-line string
using backticks.`;

console.log(singleQuoteString); // Output: Hello, Alice!
console.log(doubleQuoteString); // Output: Hello, Bob!
console.log(greeting); // Output: Hello, Charlie!
console.log(multiLineString); // Output: This is a
                             // multi-line string
                             // using backticks.

//Concatenation Types
console.logs(`My name is ${namePerson}and I am ${age}`);
//Template String ]aka Template literals  is the new way 
console.log(`My name is ${namePerson} and I am ${age}`)

//================================Self Work===============================
// Write Your JavaScript Code Here

let VALUE_STORED_IN_VARIABLE_NAME = "Alex";
let VALUE_STORED_IN_VARIABLE_PETS = 1;
let VALUE_STORED_IN_VARIABLE_FUNFACT = "i've never coded";

console.log(`My name is ${VALUE_STORED_IN_VARIABLE_NAME}.`);
console.log(`I have ${VALUE_STORED_IN_VARIABLE_PETS} pet(s).`);
console.log(`Fun fact: ${VALUE_STORED_IN_VARIABLE_FUNFACT}.`);
console.log("my name is"+VALUE_STORED_IN_VARIABLE_NAME + "." + "I have"+ VALUE_STORED_IN_VARIABLE_PETS + "." + "Fun Fact:"+ VALUE_STORED_IN_VARIABLE_FUNFACT + ".");
console.log("The last example is showing cadnation. But the previous 3 are template literals (recommended).")

// {} // Curly braces - Note an object/varible for temporal literals 
// [ ] // Square Brackets - used for arrays
// () // Parenthesis - AKA Parens work for calling fuctions and etc.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Q: why does the whole console log fail if the error is beyond the line of code ran? 




// Strings Properties and methods 
const s = 'Hello World';
console.log(s.length); // properties don't have ()
console.log(s.toUpperCase()) // method is a function that's associated with an object.
console.log(s.substring(0, 5).toUpperCase()) //you can chain methods. This

const b = 'technology, commupters, it, learning'
console.logs(s.split('')); // Array are varibles that old multiple values.
const numbers = new Array(1, 2, 3, 4); // old way using a constructer of "new"
console.logs(numbers);
const fruits = ['apples', 'oranges', 'pears']; // brackets [ ] are more commonly used today. JS is not Data Type dependant. We can have numbers, strings etc here. This
console.logs(fruits[1]);  // this returns oranges since apples is [0]. arrays are zero based. This
fruits[3] = 'grapes'; // adds grapes at the end.

fruits.push('mangos'); // adds mangos at the end. This

fruits.unshift('strawberries'); //adds strawaberries at the front. This

fruits.pop(); // removes the mangos at the front

console.log(Array.isArray(fruits)); // checks if the () is array. Boolean is returned. 

console.log(fruits.indexOf('oranges'))

// Object litera are key value pairs that

const newPerson = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: "123 fake st",
        city: 'dallas',
        state: 'tx'
    }
}

console.log(newPerson.hobbies[1]) // extracts the moves from the Object Liteal above

const { firstName, lastName } = newPerson; // Destructing 

console.log(firstname); // destructering 

newPerson.email = "john@outlook.com"

console.log(newPerson); // Email prperty has been added. 

const todos = [ // Array with three objects. Arrays always start with []
    {
        id: 1,
        tsxt: 'take out the trash',
        isCompleted: true
    },

    {
        id: 2,
        tsxt: 'Meeting with boss',
        isCompleted: false
    },
    {
        id: 3,
        tsxt: 'Dentist appt',
        isCompleted: true
    },

]

const todoJSON = JSON.stringify(todos); // converts the above Array to JSON to send to server. 
console.log(todoJSON); // view JSON in cosole. 


//Loops

// For

for (let i = 0; i < 10; i++) {
    // assignment of the ittoraor =0; condition less than 10; increments

    console.log(`For Loop Number: ${i}`);
}

//while loops set the varible outside the loop
let i = 0;
while (i < 10) {
    console.log(`while loop number: ${i}`);
    i++ // makes sure you increment the loop otherwise it will just loop. 
}

// Loop through Arrays. Not the best way to loop through the way but possible. 
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//for of loop
for (let todo of todos) {
    console.log(todo.text);
}

// high order array methods: foreach, map, filter

//foreach loops through them
todos.forEach(function (todo) {
    console.log(todo.text);
});



//map allow us to crate a new array from an array
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);


//filter create a new array based on a condition. The reults returned are the completed ones. 
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//chaining array methods. just get map the text from before. just an array of the completed text.
const todoCompleted1 = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});

// Conditions

const p = 10;
if (p == 10) { // == means will not match the data types === means matches the data types
    console.log('p is 10');
} else if (p > 10) {
    console.log('p is grater than 10')
} else { console.log('p is NOT 10') }

const r = 10;
const v = 5;

// multiple conditions

if (v > 11 || r < 9) { // the "duble pipe" are OR. comments won't let me type the out
    console.log("x is more than 5 or y is more than 10")
};

//Turnery Operator short hand if statment that sings varibles based on a condition. 
const q = 10;
const color = q > 10 ? 'red' : ' blue'; // ? === then : === else

switch (color) { // evaluate a condition using swith
    case 'red':
        console.log('color is red')
        break;
    case 'blue';
        console.log('color is blue')
        break;
        Default:
        console.long('color is not red or blue')};
        break;


        //fucntions 
        function addNums(Num1, Num2) {  //"addNums" is the crated function it was created here and now. Num1 and Num2 can accept value as well with Num1= 1 Num = 1 < default values
            console.log(num1 + num2);
        }

        addNums(5, 4); // function isn't doing anything until called here. addNums() while Num1 and Num2 are = to 1 will total to 2. wrap this in consoel.log(addNums) to see the resultes in the console log.

        //Arrow functions 
        const addNums(Num1 = 1, Num2 = 1) => Num1 + 5;


        //OBEJECT ORENTED PROGRAMING
        // Constrcutive Functions 
        function Person(fistName, lastName, dob) {
            this.frstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob); // new Date() is a constructor  sets the numbers to a date objeect so you can call methods with it. 
            this.getBirthDate = function () {
                return this.dob.getFullYear();
            }
            this.getFullName = function () {
            }
        }

        person.prototype.getBirthYear = function () {
            return this.dob.getFullYear();
        }


        // Instantiate object with the constructor object
        const person1 = new Person('John', 'Doe', '4-3-2020') // now this is a person object
        const person2 = new Person('Jane', 'Doe', '11-3-2020')
        console.log(person1);
        //Results will be as followed Person {firstName: "John", lastName: "Doe", dob: "4-3-2020"} same for Jane
        //
        console.log(person1.fistName); // returns John

// TODO: Review Prototypes - you can attach methods and objects to the prototype

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


// See DOM 
// Single Element Selectors 
document