const radiusEl = document.getElementById("input-radius")
const enterBtn = document.getElementById("enter")

enterBtn.addEventListener("click", function() {
    const r = radiusEl.value
    const volumn = (4/3) * Math.PI * Math.pow(r, 3)
    alert("The volumn of sphere is: " + volumn)
})