const myScreen = document.querySelector(".body");
const btnScreen = document.querySelector(".btnscreen");
const myModes = document.querySelector(".modes");
const screenClair = document.getElementById("clair");
const screenSombre = document.getElementById("sombre");
const screenPenombre = document.getElementById("penombre");
const myOn = document.querySelector(".on");
const myOff = document.querySelector(".off");

myOn.addEventListener("click", ()=>{
myOn.style.zIndex = "0";
myOff.style.zIndex = "1";
myOn.style.opacity = "0";
myOff.style.opacity = "1";
myModes.style.display = "none";
myOn.style.transition = "o.9s";
});
myOff.addEventListener("click", ()=>{
myOff.style.zIndex = "0";
myOn.style.zIndex = "1";
myOff.style.opacity = "0";
myOn.style.opacity = "1";
myModes.style.display = "flex";
myOff.style.transition = "0.9s";
});
screenClair.addEventListener("click", ()=>{
myScreen.style.background = "white";
myScreen.style.color = "black";
});
screenSombre.addEventListener("click", ()=>{
myScreen.style.background = "black";
myScreen.style.color = "white";
});
screenPenombre.addEventListener("click", ()=>{
myScreen.style.background = "rgba(200, 200, 200, 0.9)";
myScreen.style.color = "black";

});