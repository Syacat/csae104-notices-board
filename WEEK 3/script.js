let blue = document.getElementById("blue");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");

let colorMessage = document.getElementById("colorMessage");

// Blue Background
blue.addEventListener("click", function () {
    document.body.style.background = "blue";

    colorMessage.textContent = "You Choose Blue!";
    colorMessage.style.color = "white";

    alert("Background color changed to Blue!");
});

// Red Background
red.addEventListener("click", function () {
    document.body.style.background = "red";

    colorMessage.textContent = "You Choose Red!";
    colorMessage.style.color = "white";

    alert("Background color changed to Red!");
});

// Yellow Background
yellow.addEventListener("click", function () {
    document.body.style.background = "yellow";

    colorMessage.textContent = "You Choose Yellow!";
    colorMessage.style.color = "black";

    alert("Background color changed to Yellow!");
});