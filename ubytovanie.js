/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function () {

    // If user clicks on any thumbanil,
    // we will get it's image URL
    $('.thumbnails1 img').on({
        click: function () {
            let thumbnailURL = $(this).attr('src');

            // Replace main image's src attribute value 
            // by clicked thumbanail's src attribute value
            $('.figure1 img').fadeOut(200, function () {
                $(this).attr('src', thumbnailURL);
            }).fadeIn(200);
        }
    });
});

$(document).ready(function () {

    $('.thumbnails2 img').on({
        click: function () {
            let thumbnailURL = $(this).attr('src');

            $('.figure2 img').fadeOut(200, function () {
                $(this).attr('src', thumbnailURL);
            }).fadeIn(200);
        }
    });
});

$(document).ready(function () {

    $('.thumbnails3 img').on({
        click: function () {
            let thumbnailURL = $(this).attr('src');

            $('.figure3 img').fadeOut(200, function () {
                $(this).attr('src', thumbnailURL);
            }).fadeIn(200);
        }
    });
});

$(document).ready(function () {

    $('.thumbnails4 img').on({
        click: function () {
            let thumbnailURL = $(this).attr('src');

            $('.figure4 img').fadeOut(200, function () {
                $(this).attr('src', thumbnailURL);
            }).fadeIn(200);
        }
    });
});
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