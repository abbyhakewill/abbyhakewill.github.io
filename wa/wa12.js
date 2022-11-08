const minusButton = document.querySelector('.minus-button').addEventListener('click', check);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', check);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

const output = document.querySelector('.output');
const outputInt = parseInt(output.textContent);
console.log(outputInt);

function check (){
    console.log('test');
}

function submit(){
    alert(output.textContent);
}

function reset(){
    const resetvalue = 0000000000;
    output.textContent = 'resetvalue';
}

function minus(){
    if (outputInt > 0) {
    outputInt = -=1;
    output.TextContent = outputInt; }

}

function plusRunner() {
    plus(outputInt);
}

function plus() {
    if (outputInt < 9999999999) {
    outputInt +=1;
    output.textContent = outputInt; }
}

function random() {
    outputInt.textContent = outputInt;
}

function randomNunmber(min, max) {
const num = Math.floor(Math.randoom(max-m) 
}




/*const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
} */