Within this lab, we are practicing DOM & DOM Manipulation to create a Calculator.
All the info below is the Pre-Information that the exercise explains before commencing 
the DOM Events Lab.


Introduction

Before diving into the exercise, take a moment to inspect the provided starter code. You’ll find that both the HTML and CSS portions have already been provided for you. 

Your primary focus will be on using JavaScript in the app.js file to bring the calculator to life. Pay special attention to the index.html file and any provided attributes that will help you interact with the calculator’s elements.

Before you start coding, open the index.html file in your browser to familiarize yourself with the user interface you’ll be working with.

User stories
User stories are crucial in breaking down the features of an application and structuring the development process. They are typically written as “As a user, I want to…”, which helps in focusing on user needs and experiences.

Here are the user stories for this lab:
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.
🧠 Formatting your user stories as smaller and more focused can make the development process easier to manage.

Implement a user story
Let’s take the first one as an example and work through some preliminary questions and implementation steps together.

User Story: As a user, I want to be able to select numbers so that I can perform operations with them.

Preliminary Questions
When planning our code, we might consider the following...
1. How do we capture the “value” when a number button is clicked?
2. What steps are needed to achieve this?
3. Can we use existing attributes to tie events to our number button elements?

Implementation
After thinking through our approach, here are some options for implementing this user story:


A. Using forEach to assign event listeners

1. Query for all calculator buttons.

E.G. Using querySelectorAll and the existing button class, we can store a reference to all of our calculator buttons.

EXAMPLE: 
const buttons = document.querySelectorAll('.button');

2. Add event listeners to all buttons at once.
a. Using the forEach method, you can add event listeners to all buttons.
b. Use a console.log within the event listener to verify that the click event captures the correct value from the button. This step is for testing purposes and should be replaced with actual logic to capture and use the button’s value later.
c. Clicking a button will log the target’s inner text to the console.

EXAMPLE:
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});
🧠 event.target.innerText accesses the inner text of the clicked element. This is the text content inside the HTML element.  (MY QUESTION: Would this then select the innerText that is the number of the button? Or not? Isn't the number a number and not text?)

When any element in the button collection is clicked, this code will log its inner text (the visible text inside the element) to the console.


B. Using event delegation
Event delegation allows us to assign event listeners to a parent element and handle events for its children through a single listener. This can be more efficient.

1. Query for the parent calculator element.
Using querySelector and the existing calculator id, we can store a reference to our calculator.

EXAMPLE:
const calculator = document.querySelector('#calculator');

2. Add an event listener to the calculator element.

a. The parent element will delegate its event listener to its children, giving each button on the calculator the ability to respond to click events.
b. Use a console.log within the event listener to verify that the click event captures the correct value from the button. This step is for testing purposes and should be replaced with actual logic to capture and use the button’s value later.
c. Clicking a button will log the target’s inner text to the console.

EXAMPLE:
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }
});

🧠 event.target.classList.contains('number') checks if the clicked element has the class ‘number’. This is useful for identifying different types of buttons (numbers vs. operators).

By using event delegation, we can handle clicks for all buttons within the calculator element using a single event listener.


Lab Exercise
Your primary goal is to implement the user stories listed above. The Minimum Viable Product (MVP) for this lab focuses on basic functionality and does not cover edge cases, such as pressing an operator button multiple times. You are encouraged to tackle these advanced cases once you have achieved the MVP.

Tips for a smooth lab experience
Start with the basics: Begin by implementing simple operations like 1 + 1 or 4 - 2.

Advance to more complex operations: Once you’re comfortable, try handling operations with multi-digit numbers, like 15 - 10 or 23 + 57.

Understand button roles: Remember, each calculator button serves a specific purpose. Differentiate between number buttons and operator buttons. Consider how the event handling might vary between them.

Happy coding! 🎉

--------------------------------------------------------

NOTES ON HOW A COMPUTER THINKS ...so that I better understand how to communicate with it.

🧠 How the computer thinks through a calculator:
🔹 Step 1:
“I’m ready. I’m watching. I’m waiting for someone to click anything.”

🔹 Step 2:
“A button was clicked. Let me check what’s written inside that button.”

🔹 Step 3:
“What kind of button was it?”

If the button says a number (like 3, 6, 9):

“I’ll add that to whatever number is being typed right now. I’ll show it in the display.”

If the button is an operator (+, –, ×, ÷):

“I’ll save the number the user just typed as the first number.”
“I’ll save the operator too, so I know what kind of math to do.”

If the button says “=”:

“Now I’ll take the first number, the operator, and the second number, and do the math.”
“Then I’ll show the answer in the display.”

If the button says “C”:

“Clear everything. Start over. Empty the display and forget the numbers and operator.”

🔹 Step 4:
“Go back to waiting. Ready for the next button click.”

💬 The computer only knows:
What button was clicked

What text was inside that button

What you told it to remember

What you told it to show

That’s it.

It doesn’t guess.
It doesn’t know what a number is unless you check it.
It doesn’t do math unless you say when and how.

