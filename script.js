const full = document.querySelector(".img2")
const full2 = document.querySelector(".skills2")
const closeimg = document.querySelector(".close-img")
const cambiarFondoBtn = document.getElementById('cambiarFondoBtn');
const cambiarFondoBtn2 = document.querySelector("#cambiarFondoBtn-2")
const fondos = document.getElementById("fondo")
const main = document.querySelector(".main")

closeimg.addEventListener("click", () => {
    full2.classList.remove("skills2-active")
})

full.addEventListener("click", () => {
    full2.classList.toggle("skills2-active")
})

full2.addEventListener("click", () => {
    full2.classList.remove("skills2-active")
})

