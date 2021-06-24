// import functions
// import add function

import { add } from "./calculations.js";

// reference needed DOM elements
// input 1, input 2. answer span, add button

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

