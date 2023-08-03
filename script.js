const full = document.querySelector(".img2")
const full2 = document.querySelector(".skills2")
const closeimg = document.querySelector(".close-img")

closeimg.addEventListener("click",()=>{
full2.classList.remove("skills2-active")
})

full.addEventListener("click",()=>{
    full2.classList.toggle("skills2-active")
})