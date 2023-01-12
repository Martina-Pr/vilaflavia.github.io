/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* scrolovanie */
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("button");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 500) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#989a98 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/* hamburger menu */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navigation") {
        (x.className += " responsive");
    } else {
        (x.className = "navigation");
    }
}

