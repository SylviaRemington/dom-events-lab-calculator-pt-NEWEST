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

/*-------------------------------- Functions --------------------------------*/
