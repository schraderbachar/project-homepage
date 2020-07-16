
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mtn = document.getElementById("mtn");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', () => {
    var value = window.scrollY;

    bg.style.top = value * .5 + 'px';
    moon.style = -value * .5 + 'px';
    mtn.style.top = -value * .15 + 'px';
    road.style.top = value * .15 + 'px';
    text.style.top = value * 1 + 'px';
});

