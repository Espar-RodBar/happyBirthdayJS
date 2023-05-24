const avionArr = document.querySelectorAll(".avion");
const button = document.querySelector(".button");
const background = document.querySelector(".card-wrapper");
const feliz = document.querySelector(".feliz");

button.addEventListener("click", function (ev) {
    background.classList.remove("hidden");
    setTimeout(function () {
        background.classList.add("active");
    }, 1000);
    setTimeout(function () {
        avionArr.forEach((avion) => avion.classList.remove("init"));
    }, 2000);
    setTimeout(function () {
        avionArr.forEach((avion) => avion.classList.add("end"));
    }, 3000);

    setTimeout(function () {
        feliz.classList.remove("init");
    }, 10000);
});
