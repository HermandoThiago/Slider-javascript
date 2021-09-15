// Slider - JS

let lastIndex = 0
let divs = document.querySelectorAll("#slider .child")

divs.forEach((item, index) => {
    document.querySelectorAll("input")[index]
    .addEventListener('click', ()=>{
        let LastImage = document.querySelectorAll("#slider .child")[lastIndex]
        let actualImage = document.querySelectorAll("#slider .child")[index]
        lastIndex = index

        LastImage.style.opacity = 0
        actualImage.style.opacity = 1
    })
})