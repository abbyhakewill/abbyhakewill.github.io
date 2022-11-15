var upper = 9999999999; 
var lower = 0000000000; 

var current = 5555555555; 

$(document).ready(function() {
  
  $('#less').click(less);
  $('#more').click(more);
  
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

function less() {
  upper = current - 1; 
  updateDisplay(); 
}

function more() {
  lower = current + 1; 
  updateDisplay(); 
}

/* code help & outline credit goes to https://blog.codepen.io/2016/11/03/ridiculous-ways-enter-phone-number-form/ */