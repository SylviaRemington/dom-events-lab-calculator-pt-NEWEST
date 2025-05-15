//DOM EVENTS CALCULATOR LAB - newest rendition from scratch after re-reviewing all JS materials from class.
// Done!!! :)

// Get calculator elements
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');

// Calculator state variables
let currentNumber = '';      // Stores what's being typed right now
let firstNumber = null;      // Stores first number when operator is pressed
let operation = null;        // Stores which operation (+, -, etc.) was pressed

// Number buttons (0-9)
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    display.textContent = currentNumber;
  });
});

// Operator buttons (+, -, *, /, C)
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'C') {
      // Clear everything
      currentNumber = '';
      firstNumber = null;
      operation = null;
      display.textContent = '0';
      return;
    }
    
    if (currentNumber !== '') {
      firstNumber = parseFloat(currentNumber);
      operation = button.textContent;
      currentNumber = ''; // Clear immediately after operator press
    }
  });
});

// Equals button
equalsButton.addEventListener('click', () => {
  if (operation === null || firstNumber === null || currentNumber === '') return;
  
  const secondNumber = parseFloat(currentNumber);
  let result;
  
  switch (operation) {
    case '+': result = firstNumber + secondNumber; break;
    case '-': result = firstNumber - secondNumber; break;
    case '*': result = firstNumber * secondNumber; break;
    case '/': result = firstNumber / secondNumber; break;
  }
  
  display.textContent = result;
  currentNumber = result.toString();
  firstNumber = null;
  operation = null;
});















// Code Graveyard -- old notes, old attempts at coding this and different versions

/*

User Stories for this lab:
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.

*/

/*
  <body>
    <div id="calculator">
      <div class="row">
        <div class="display"></div>
      </div>
      <div class="row">
        <div class="button number">7</div>
        <div class="button number">8</div>
        <div class="button number">9</div>
        <div class="button operator">/</div>
      </div>
      <div class="row">
        <div class="button number">4</div>
        <div class="button number">5</div>
        <div class="button number">6</div>
        <div class="button operator">*</div>
      </div>
      <div class="row">
        <div class="button number">1</div>
        <div class="button number">2</div>
        <div class="button number">3</div>
        <div class="button operator">-</div>
      </div>
      <div class="row">
        <div class="button operator">C</div>
        <div class="button number">0</div>
        <div class="button equals">=</div>
        <div class="button operator">+</div>
      </div>
    </div>
  </body>
*/

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*Notes for me on why we need these two things and how they are different:
FROM CHAT GPT
🔹 const buttonElement = ...
This saves the buttons themselves — the things the user clicks.

It’s like saying:
“Here are the physical keys on the calculator.”
You can now listen to when someone clicks one of those keys.

🔸 let number = ''
This saves the value the user is typing — the number that’s being built.
It’s like saying:
“Here’s the typed-in number so far.”

🔁 So:
The first one saves the buttons
The second one saves the input the user is creating

THIS IS THE INFORMATION I NEEDED BELOW:
You need both:
One to detect clicks
One to keep the number being typed

MY NOTES/REALIZATIONS... phew finally:
So this is saving the "listening for clicks"
And this is saving the value
*/

// let number = ''; //And this is saving the value so that the computer can use an operator afterthis
// let operator = '';
// let equals = '';
// // let clear = clear

/*------------------------ Cached Element References ------------------------*/

// const calculatorElement = document.querySelector('#calculator');
// console.log(calculatorElement);
// const displayElement = document.querySelector('.display');
// console.log(displayElement);
// const buttonElement = document.querySelectorAll('.button');
// console.log(buttonElement);
// const numberElement = document.querySelectorAll('.number');
// console.log(numberElement);
// const operatorElement = document.querySelector('.operator');
// console.log(operatorElement);
// const equalsElement = document.querySelector('.equals');
// console.log(equalsElement);
// const buttonNumberElement = document.querySelector('.button.number');
// console.log(buttonNumberElement);
// const buttonAllNumberElements = document.querySelectorAll('.button.number');
// console.log(buttonAllNumberElements);
// const buttonOperatorElement = document.querySelector('.button.operator');
// console.log(buttonOperatorElement);
// const buttonAllOperatorElements = document.querySelectorAll('.button.operator');
// console.log(buttonAllOperatorElements);




/*----------------------------- Event Listeners -----------------------------*/

//Event listeners to come (to be announced soon! Preview of coming attractions! :)

/*Here's some ideas:
I would need to use innerText and the parse thing that converts the numbers to let calculator know they are numbers
🔹 First: Use innerText
To get the number from the button.

This gives you the number as text — like "7" (with quotes, meaning it’s a string).

🔹 Then: Use a converter
Like the parse method.

To turn that text into a real number — like 7 (as a number, not just characters).

This way, you can use the number for math later (like adding or multiplying), not just display it.

Can both of those things be in the same function?


ChatGPT said:
✅ Yes — both of those steps can absolutely be in the same function.

In fact, it’s very common to:

Get the text from the button,

Convert it into a number,

And then use it (like show it on the screen or store it),

all in one place.

Think of it like one action:

“When the user clicks, figure out the number and do something with it.”


So it could be a function inside of an Event Listener?


ChatGPT said:
✅ Yes — exactly.

That’s how it’s usually done:

The event listener waits for the click.

When the click happens, it runs a function.

Inside that function, you can:

Get the text from the button (like "7")

Convert it into a number

Show it on the display or store it for a calculation

So yes — the function that handles all of that can live inside the event listener.
*/

// button.addEventListener("click", function() {
//   console.log("Button Clicked!");
//   //innerText to read the content of an element - create a const or let about innerText
// });

/*-------------------------------- Functions --------------------------------*/

//if (text !== "+" && text !== "-" && text !== "*" && text !== "/" && 
// text !== "=" && text !== "C") {
  // must be a number
// }

//if button number === 'C', then make display null..or zero... whatever is best.