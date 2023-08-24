let firstCont = document.getElementById("first-div")
let secCont = document.getElementById("sec-div")
let thirdDiv = document.getElementById("third-div")

let firstInput = document.getElementById("1pair")
let secInput = document.getElementById("2pair")
let thirdInput = document.getElementById("3pair")

firstInput.onclick = function() {
    firstCont.classList.toggle("back-color-change")
    secCont.classList.remove("back-color-change")
    thirdDiv.classList.remove("back-color-change")
    
}

secInput.onclick = function() {
    secCont.classList.toggle("back-color-change")
    firstCont.classList.remove("back-color-change")
    thirdDiv.classList.remove("back-color-change")
}

thirdInput.onclick = function() {
    thirdDiv.classList.toggle("back-color-change")
    firstCont.classList.remove("back-color-change")
    secCont.classList.remove("back-color-change")
}