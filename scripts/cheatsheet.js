/*
     ██╗███████╗     ██████╗██╗  ██╗███████╗ █████╗ ████████╗    ███████╗██╗  ██╗███████╗███████╗████████╗    ██████╗ 
     ██║██╔════╝    ██╔════╝██║  ██║██╔════╝██╔══██╗╚══██╔══╝    ██╔════╝██║  ██║██╔════╝██╔════╝╚══██╔══╝    ╚════██╗
     ██║███████╗    ██║     ███████║█████╗  ███████║   ██║       ███████╗███████║█████╗  █████╗     ██║        █████╔╝
██   ██║╚════██║    ██║     ██╔══██║██╔══╝  ██╔══██║   ██║       ╚════██║██╔══██║██╔══╝  ██╔══╝     ██║       ██╔═══╝ 
╚█████╔╝███████║    ╚██████╗██║  ██║███████╗██║  ██║   ██║       ███████║██║  ██║███████╗███████╗   ██║       ███████╗
 ╚════╝ ╚══════╝     ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝       ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝       ╚══════╝                                                                                                                   
*/
// 📌 Variables ----------------------------------------------------------------------------------------------------------------------
/*
Just like in previous lessons. I have convinced you that you already understand the concept of variables. This case is no different. 
Think of the words we use. What are they? They are basically variables because they store data and the data they store is what they represent. 
Phone is a variable that represents a specific series of devices. So much so that in the current day phone has other variables
in it like camera, calculator, web browser, general purpose computer and so on. 
The words we use are not the thing. The thing is the thing. The words just represent the thing which makes it a variable. 

We can use variables in more advanced ways when you get past the basic concept. Like putting a function into a variable.
*/

// We can put functions into variables
const $variable_function = function() {
    'This console log is coming from a function that is stored in a variable!';
};

console.log($variable_function);

// We can put html elements into variables
const $flex_child = document.querySelector('.flex div:nth-child(2)');
$flex_child.classList.add('change-flex-child');

// We can put the value of somehting into a variable...
// First put the input element into a variable...
const $variable_text = document.getElementById('variable-text');
// Add an event listener so that when a change is made in it, it updates
$variable_text.addEventListener('change', (e)=> {
    // Put the value the user inputs into a variable
    let $variable_text_value = $variable_text.value;
    // Output it to the console
    console.log(`The text you put is: ${$variable_text_value}`);
    // Output it to a div with the class of .variable-text-value-box
    document.querySelector('.variable-text-value-box').innerText = `The text you put is: ${$variable_text_value}`;
});


// 📌 DOMContentLoaded ---------------------------------------------------------------------------------------------------------------
// If you want to check to see if the content is loaded before you run the JS code, you can use:
/*
document.addEventListener(DOMContentLoaded, (e)=> {
    console.log('The site is fully loaded');
});
*/

// 📌 Concatination🥈 vs Template Literals & Expressions🥇🏆 ------------------------------------------------------------------------------------------------
// In the before times, you used to have to use concatination to pass variables into strings. 
let $job = 'Professor';
let $first_name = 'Maximus';

// Below is an example of concatination, when using this method the string is incased in regular ''
console.log('Hello my name is ' + $first_name + 'and I will be your' + $job + 'for this semester.');

// Below is the better way of passing variables through strings. We do so by simply wrapping the variable name in ${}. When using this method you MUST use `` backticks
console.log(`Hello my name is ${$first_name} and I will be your ${$job} for this semester.`);

// Template literals win hands down. You could go without using concatination at all these days but it is good to know both. 

// 📌 Loops ---------------------------------------------------------------------------------------------------------------------------
// There are 6 types of loops, all execute depending on certain conditions that happen at different times.

/* 
for	        When the number of iterations is known
while       When looping should continue until a condition is false
do...while	When the loop must execute at least once, then continue based on a condition
for...in	Looping over object properties
for...of	Looping over iterable values (arrays, strings, sets, etc.)
.forEach()	Iterating over an array with a callback function

When you know the number of iterations → for
When you loop until a condition is met → while
When you must run at least once → do...while
When looping through object properties → for...in
When looping through iterable values → for...of
When iterating over an array with a function → .forEach()
*/

// 📌 1 for Loop (Standard Counting Loop) ---------------------------------
// Used when you know how many times the loop should run.
for (let $number = 0; $number < 10; $number++){
    console.log($number);
};

// 📌 2 while Loop (Condition-Based Loop) ---------------------------------
// Used when looping should continue until a condition becomes false.
let x = 10;
let y = 1;
while (y <= x) { // While y is less than or equal to x...
    y++; // Add 1 to y
    console.log(`x is equal to ${x} -  y is equal to ${y}`);
};

// 📌 3️ do...while Loop (Runs at Least Once) -------------------------------
//Used when at least one execution is required before checking the condition.
let beers = 0;
do {
    console.log(`${beers} Beers Dranken successfully! 😵‍💫`);
    beers++;
} while (beers <= 10);

// 📌 4️ for...in Loop (Object Property Loop) --------------------------------
// Used for looping over object properties (not recommended for arrays).
const person = {
    Name: 'Bobbo',
    Job: 'Professor',
    City: 'Toronto'
};

for (let key in person){
    console.log(key, person[key]);
};

// 📌 5️ for...of Loop (Iterates Over Values) ----------------------------------
// Used for looping over iterable values like arrays, strings, sets, or maps.
const playingCards = [10, 20, 30];
for (let num of playingCards) {
    console.log(num); // 10, 20, 30
};


// 📌 6️ .forEach() (Array Method for Iteration) --------------------------------
// Used for looping through arrays with a callback function.
const numbers = [10, 20, 30];
numbers.forEach(num => console.log(num)); // 10, 20, 30

/* 

✅ Most Used Loops
for loop → Used when iterating a known number of times.
.forEach() → Used when working with arrays.
for...of → Gaining popularity for iterating over arrays and other iterables.

❌ Less Common Loops
while → Used only when the stopping condition is unpredictable.
do...while → Rarely used because it always runs once, which is not always desirable.
for...in → Avoided for arrays (it's meant for objects).

*/

// Practical Examples //

// 1 for Loop → Best for Known Ranges ------------------------------------------
// 📌 Use Case: Paginating search results (e.g., display 10 products per page).
// Display products on a page. Because the products array is limited, the for loop will not go into infinity.
let products = ["Laptop", "Phone", "Tablet", "TV", "Camera", "Speaker", "Watch", "Monitor", "Mouse", "Keyboard"];
for (let i = 0; i < products.length; i++) {
    console.log(`Product ${i + 1}: ${products[i]}`);
};
// ✅ Best when you know how many times to iterate (fixed range).
// 🚫 Avoid for arrays when you don’t need an index (use .forEach() instead).


// 2 while → Best for Loops with Unknown End Conditions -------------------------
// 📌 Use Case: Waiting for a user to log in (polling for user authentication).
let isLoggedIn = false;
let attempts = 0;

while (!isLoggedIn && attempts < 3) {
    console.log("Checking login...");
    attempts++;

    if (attempts === 3) {
        console.log("Max login attempts reached!");
    }
};
// ✅ Best when the loop should run until a condition is met.
// 🚫 Avoid when you know the exact number of iterations (use for instead).


// 3 do...while → Best for Guaranteed Execution (At Least Once) --------------------
// 📌 Use Case: Prompting the user for input (e.g., getting age in a survey).

const $prompt_btn = document.getElementById('prompt-btn');
$prompt_btn.addEventListener('click', (e)=> {
    let age;
    do {
        age = prompt("Enter your age: ");
    } while (!age || isNaN(age));
    console.log(`Your age is ${age}`);
});

// ✅ Best when user input is required at least once.
// 🚫 Avoid when you don’t need to force one execution.


// 4 for...in → Best for Objects (Not Arrays!) --------------------------------------
// 📌 Use Case: Displaying user profile information.
let user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
// ✅ Best when looping over object properties.
// 🚫 Avoid for arrays (it loops over indexes, not values).


// 5 for...of → Best for Iterables (Arrays, Strings, Sets, Maps) --------------------
// 📌 Use Case: Processing user input one character at a time (e.g., typing animation).
let message = "Hello!";

for (let char of message) {
    console.log(char);
};
// ✅ Best for iterating over values without needing an index.
// 🚫 Avoid for objects (use for...in instead).


// 6 .forEach() → Best for Arrays ----------------------------------------------
// 📌 Use Case: Logging customer names from a database.
let customers = ["Alice", "Bob", "Charlie"];

customers.forEach((customer) => {
    console.log(`Customer: ${customer}`);
});
// ✅ Best when working with arrays, as it's more readable than a for loop.
// 🚫 Avoid when you need to break out of the loop early (use for instead).


// 📌 Math --------------------------------------------------------------------------------------------------------------------
// Basic Math

// To do basic math you can do it with or without variables and use the operands:
// + Plus
// - Minus
// * times
// / Divide
// ** Exponentiation
// ++ increment up
// -- Increment down



// Output to console some math with no variables
console.log(20 + 33);

// Using variables
const a = 5;
const b = 10;
console.log(a + b);

// The Math object
// The Math object can be used to run different maths. There are many of these.

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

// You can return them on their own or put them into a variable
let c = Math.PI;
console.log(`The number PI is: ${c}`);

// Math Methods. You can use them to perform various math tasks.

// Math.round() Round to the nearest whole number
console.log('Math.round():' + Math.round(2.2));

// Math.ceil() Round up
console.log('Math.ceil(): ' + Math.ceil(2.2));

// Math.floor() Round down
console.log('Math floor: ' + Math.floor(20.4));

// Math.pow() Power of
console.log('To the power of ' + Math.pow(2, 5));

// Math.sqrt() Square Root
console.log('The square root ' + Math.sqrt(50));

// Math.abs() Return an absolute number (prevent negative numbers)
console.log('Absolute Number ' + Math.abs(-200));

// 📌 Types of data --------------------------------------------------------------------------------------------------------------------

// So far we have been playing with various types of data. In JS, data types are not as important as a language like C because in JS we dont have to declare data types when making variables. We should still understand them though. 

// In JS there are 9 data types:

// String       This is any text in single or double quotes like 'Professor Maximus 007' A string can contain any characters.
// Number       This is any number including ones with decimals 
// Bigint       This is used to store BIG numbers like: 123812093792849324793212839898217392187947347328
// Boolean      True or False
// Undefined    If something is not defined. Like an undefined variable: let name;
// Null         Null is nothing
// Symbol       Is a built-in object whose constructor returns a symbol
// Object       This can be user defined objects or built in ones like: objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more


// If you ever need to check what something is, you can use typeof() to check - typeof(variable_name);
const some_str = 'This is some string blah blah blaj. Just go ahead of typeof it';

console.log(typeof(some_str));
// The above statement will return 'string' in the console


// 📌 Nesting Functions --------------------------------------------------------------------------------------------------------------------
outputBoxOuter = document.querySelector('.nestedFunctionOuter');
outputBoxInner = document.querySelector('.nestedFunctionInner');

function outer() {
    outputBoxOuter.innerText = 'This is the Outer function!';
    function inner() {
        outputBoxInner.innerText = 'This is the Inner function!';
    };
    inner();
};
outer();

// 📌 Local Storage ------------------------------------------------------------------------------------------------------------------------
// Local storage is used to store data so it persists. To check this, open the browsers dev tools and head over to the Application tab. Here you can see any memory.
// Local storage will persist until the user manually clears it.

localStorage.setItem('key', 'string');
localStorage.removeItem('key');
localStorage.getItem('key');


let $name_input = document.getElementById('name');
let $name_box = document.getElementById('userName');

function updateName() {
    let $name = $name_input.value;
    console.log($name);
    localStorage.setItem('userName', $name);
    
    $name_box.innerText = localStorage.getItem('userName');
};

$name_box.innerText = localStorage.getItem('userName');

$name_input.addEventListener('keydown', updateName);


// 📌 Session Storage ------------------------------------------------------------------------------------------------------------------------
// Session storage is similar to local storage but it will only persist until the browser tab is closed.

sessionStorage.setItem('key', 'string');
sessionStorage.removeItem('key');
sessionStorage.getItem('key');


let $sstext_input = document.getElementById('sessionStorageInput');
let $sstext_output = document.getElementById('sessionStorageOutput');

function updateText() {
    let $input = $sstext_input.value;
    console.log($input);
    sessionStorage.setItem('randomText', $input);

    $sstext_output.innerText = sessionStorage.getItem('randomText');
};

$sstext_output.innerText = sessionStorage.getItem('randomText');

$sstext_input.addEventListener('keydown', updateText);


// 📌 Cookies -------------------------------------------------------------------------------------------------------------------------------

let $cookieInput = document.getElementById('cookieInput');

document.cookie = 'This is a basic cookie!';

$cookieInput.addEventListener('keydown', (e)=> {
    let $cookie = $cookieInput.value;
    let expires = new Date();
    expires.setDate(expires.getDate() + 7); // Cookie expires in 7 days
    document.cookie = `cookieName=${$cookie}; expires=${expires.toUTCString()}`;

    let $cookie_text_box = document.getElementById('cookietext');
    $cookie_text_box.innerText = $cookieInput.value;
    console.log($cookieInput.value);
});





