let body = document.querySelector("body");
body.addEventListener("click", giveAlert);

function giveAlert() {
    alert("this is an alert");
}

const btn = document.getElementById("btn");
btn.addEventListener("click", function onClick(event) {
    event.target.style.color = "orange";
});