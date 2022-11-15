const button = document.querySelector(".burgerButton");

const element = document.querySelector(".listBurger")
let color = window.getComputedStyle(element).visibility;

button.onclick = function () {
const element = document.getElementsByClassName('listBurger')[0]
    element.style.visibility =  element.style.visibility === 'visible' ? 'hidden' : 'visible'
    
}

