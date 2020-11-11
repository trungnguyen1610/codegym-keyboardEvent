
// function upArrow() {
//     var element = document.getElementById("nobita");
//     element.style.top = parseInt(element.style.top) - 5 + 'px';
// }
// function downArrow() {
//     var element = document.getElementById("nobita");
//     element.style.top = parseInt(element.style.top) + 5 + 'px';
// }
// function leftArrow() {
//     var element = document.getElementById("nobita");
//     element.style.left = parseInt(element.style.left) - 5 + 'px';
// }
// function rightArrow() {
//     var element = document.getElementById("nobita");
//     element.style.left = parseInt(element.style.left) + 5 + 'px';
//  }
// // switch case với các trường hợp 
// function moveArrows(evt) {
//     var x = evt.keyCode;
//     switch (x) {
//         case 37:
//             leftArrow();
//             break;
//         case 39:
//             rightArrow();
//             break;
//         case 38:
//             upArrow();
//             break;
//         case 40:
//             downArrow();
//             break;
//     }
// }
// function docReady() {
//     window.addEventListener('keydown', moveArrows);
// }

document.getElementById("nobita").onload = function init(){
    let picture = document.getElementById("nobita");
    picture.style.position = "absolute";
    picture.style.left = "50%"
    picture.style.top  = "50%";
    picture.style.transform = "translate(-50%,-50%)";
}

function upArrow(){
    let picture = document.getElementById("nobita");
    
    picture.style.top =  parseInt(picture.style.top) - 10 + "%";
    
}
function downArrow(){
    let picture = document.getElementById("nobita");
    picture.style.top = parseInt(picture.style.top) + 10 + "%";
}
function leftArrow(){
    let picture = document.getElementById("nobita");
    picture.style.left = parseInt(picture.style.left) - 10 + "%";
}
function rightArrow(){
    let picture = document.getElementById("nobita");
    picture.style.left = parseInt(picture.style.left) + 10 + "%";
}
function arrowCases(event){
    let x = event.keyCode;
    console.log(event)
    switch(x){
        case 37:
            leftArrow();
            break;
        case 38:
            upArrow();
            break;
        case 39:
            rightArrow();
            break;
        case 40: 
            downArrow();
            break;
    }
}
function running(){
window.addEventListener("keydown",arrowCases);
}