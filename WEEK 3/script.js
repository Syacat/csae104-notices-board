var count = 0;

var btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn.addEventListener("click", function () {
    count++;

    btn.textContent = "Clicked " + count +
        (count === 1 ? " time" : " times");

    console.log("count is now", count);
});

btn1.addEventListener("click", function () {
    alert("Hello, World!");
});

btn2.addEventListener("click", function () {
    document.body.style.background = "red";
});