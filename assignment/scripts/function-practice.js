console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log(hello());





// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name;
}
// Remember to call the function to test
console.log(helloName('Steven'));




// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber ) {
  // return firstNumber + secondNumber;
}

function add(num1, num2){
  let sum = num1 + num2;
  return sum
}

console.log('the some of 1 and 2 is ', add(1,2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  let product = num1 * num2 * num3;
  return product;
}

console.log('the product of 2,3, and 4 is ', multiplyThree(2,3,4));





// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true
  }
    return false
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );





// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0){
    return 'undefined';
  }
  else { return array[array.length-1];
  }
}

let array1 = [0,1,2,3,4,5];
let array2 = [];

console.log(getLast(array1));
console.log(getLast(array2));




// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array){

  let match = false

  for (let i = 0; i<array.length; i++){
    if (value === array[i]){
      match = true;
    }
  }
  
  return match;
}
const arr3 = [1,2,3,4,5]
console.log(find(5,arr3));










// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise


function isFirstLetter(letter, string) {
  const a = Array.from(string);
  console.log(a);
  if (letter === a[0]){
    return true;
  }
  else{
    return false;
  }
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );




// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
