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

/*------------------------ Cached Element References ------------------------*/

const calculatorElement = document.querySelector('#calculator');
const displayElement = document.querySelector('.display');
const buttonElement = document.querySelectorAll('.button');
const numberElement = document.querySelectorAll('.number');
const operatorElement = document.querySelector('.operator');
const equalsElement = document.querySelector('.equals');
const buttonNumberElement = document.querySelector('.button.number');
const buttonAllNumberElements = document.querySelectorAll('.button.number');
const buttonOperatorElement = document.querySelector('.button.operator');
const buttonAllOperatorElements = document.querySelectorAll('.button.operator');




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

/*-------------------------------- Functions --------------------------------*/

//if (text !== "+" && text !== "-" && text !== "*" && text !== "/" && 
// text !== "=" && text !== "C") {
  // must be a number
// }

//if button number === 'C', then make display null..or zero... whatever is best.