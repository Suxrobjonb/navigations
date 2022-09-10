let hamburger = document.querySelector(".site__hamburger");
let h2 = document.querySelector("h2");
let elBox = document.querySelector(".site__div")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    h2.classList.toggle("active");
    elBox.classList.toggle("active");
})
