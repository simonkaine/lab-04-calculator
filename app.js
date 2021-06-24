// import functions
// import add function

import { add } from "./calculations.js";

// reference needed DOM elements
// input 1, input 2. answer span, add button

// ---------------------------------------------------- ADD 

const addInput1 = document.getElementById("add-num1");
const addInput2 = document.getElementById("add-num2");
const addAnswerSpan = document.getElementById("add-answer");
const addBtn = document.getElementById("add-btn");

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

  //add event listener to button click
  // get the value from #add-num1 -- convert to number
  // get the value from #add-num2 -- convert to number
  // call add function with the add-num1 and add-num2

  addBtn.addEventListener('click', ()=> {

    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const answer = add(add1, add2);
    console.log(answer);
    addAnswerSpan.textContent = answer;

  });

// ----------------------------------------------- Subtract

const subInput1 = document.getElementById("sub-num1");
const subInput2 = document.getElementById("sub-num2");
const subAnswerSpan = document.getElementById("sub-answer");
const subBtn = document.getElementById("sub-btn");

subBtn.addEventListener("click", ()=> {
    const sub1 = Number(subInput1.value);
    const sub2 = Number(subInput2.value);
    const subAnswer = (sub1 - sub2);
    console.log(subAnswer);
    subAnswerSpan.textContent = subAnswer;

});

// ----------------------------------------------- Multiply

const multiplyInput1 = document.getElementById('multiply-num1');
const multiplyInput2 = document.getElementById('multiply-num2');
const multiplyAnswerSpan = document.getElementById('multiply-answer');
const multiplyBtn = document.getElementById('multiply-btn');

multiplyBtn.addEventListener('click', ()=> {
    const multiply1 = (multiplyInput1.value);
    const multiply2 = (multiplyInput2.value);
    const multiplyAnswer = (multiply1 * multiply2);
    console.log(multiplyAnswer);
    multiplyAnswerSpan.textContent = multiplyAnswer;
});

// ----------------------------------------------- Divide

const divideInput1 = document.getElementById('divide-num1');
const divideInput2 = document.getElementById('divide-num2');
const divideAnswerSpan = document.getElementById('divide-answer');
const divideBtn = document.getElementById('divide-btn');

divideBtn.addEventListener('click', ()=> {
    const div1 = (divideInput1.value);
    const div2 = (divideInput2.value);
    const divAnswer = (div1 / div2);
    console.log(divAnswer); 
    divideAnswerSpan.textContent = divAnswer;
});

// ----------------------------------------------- Modulo

const modInput1 = document.getElementById('mod-num1');
const modInput2 = document.getElementById('mod-num2');
const modAnswerSpan = document.getElementById('mod-answer');
const modBtn = document.getElementById('mod-btn');

modBtn.addEventListener('click', ()=> {
    const mod1 = (modInput1.value);
    const mod2 = (modInput2.value);
    const modAnswer = (mod1 % mod2);
    console.log(modAnswer);
    modAnswerSpan.innerText = modAnswer;
});

// ----------------------------------------------- Integer Division


// ----------------------------------------------- hypotenuse

const side1 = document.getElementById('side-num1');
const side2 = document.getElementById('side-num2');
const hypoAnswerSpan = document.getElementById('hypo-answer');
const hypoBtn = document.getElementById('hypo-btn');

hypoBtn.addEventListener('click', () => {
    const base = (side1.value);
    const perpendicular = (side2.value);
    const bSquare = (base ** 2);
    const pSquare = (perpendicular ** 2);
    const sum = (bSquare + pSquare);
    const hypotenuse = Math.sqrt(sum);
    console.log(hypotenuse);
    hypoAnswerSpan.innerText = hypotenuse;
});