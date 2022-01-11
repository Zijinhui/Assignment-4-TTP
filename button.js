let leftBtn = document.getElementById("left-btn")
let rightBtn = document.getElementById("right-btn")
let textEl = document.getElementById("text")

leftBtn.addEventListener("click", function() {
    textEl.innerText = "I'm right!"
    console.log("click")
})

rightBtn.addEventListener("click", function() {
    textEl.textContent = "No, I'm right!"
})