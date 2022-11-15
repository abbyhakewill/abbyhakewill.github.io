var upper = 9999999999; 
var lower = 0000000000; 

var current = 5555555555; 

$(document).ready(function() {
  
  $('#smaller').click(smaller);
  $('#bigger').click(bigger);
  
  $('#submit').click(submit);
  
}); 

function submit() {
  alert("You submitted: " + numberToString(current)); 
}

function numberToString(p) {
  var sp = "" + p; 
  var acc = ""; 
  for(var i=0; i < sp.length; i++) {
    acc += sp.charAt(i);
    if([2, 5].indexOf(i) != -1) {
      acc += "-";
    }
  }
  return acc; 
}

function updateDisplay() {
  current = Math.floor((upper + lower) / 2); 
  $("#phone-number").html(numberToString(current)); 
}

function smaller() {
  upper = current - 1; 
  updateDisplay(); 
}

function bigger() {
  lower = current + 1; 
  updateDisplay(); 
}






function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 9999999999) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
function update() {
  sliderOutput.textContent = slider.value;
}