// DOM put html elements into varibles 

// single element selsctors 
// console.log(document.getElementsByID('my-form'));
console.log(document.querySelector('h1'));


// multiple element selectors; 

console.log(document.querySelectorAll('.item')); //Recommended to use over the other two below. This gives uo ua Node list and you can use methods ana arrays on it. All elements selected will be a class not it. 
console.log(document.getElementsByClassName('item')); //note recommended
console.log(document.getElementsByTagName('li')); // tags are allowed too
console.log('window'); // Document is what makes up the DOM

// ^^^^^^^^^^^^^^^ Select items from the DOM 

//Changing things in the DOM

const ul = doucment.querySelector('.items') // picing up the items class on the html zpullrf 'itmes' class from the dom then set it to variables to have it removed. 

//ul.remove(); // removes all li form the html page. 
//ul.lastElementChild.remove();  // removes the last li on the we page. 
ul.firstElementChild.textcontent = 
ul.children[1].innertext = 'brad'
ul.lastElementChildren.innerhtml =


//Functions

fuctions sayhi(){
    
}