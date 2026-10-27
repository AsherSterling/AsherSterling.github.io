// -------- HOVER INTERACTION ---------
var layers = document.querySelectorAll(".layer");
var options = document.querySelectorAll(".option");
var wipe = document.getElementById("wipe");
var wipeText = document.getElementById("wipeText");
var gloom = document.getElementById("gloom");
var title = document.getElementById("title");

var mouseX = 0;
var mouseY = 0;

var currentX = 0;
var currentY = 0;

document.addEventListener("mousemove", function (e){
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    resetIdle();  
})

function animate(){
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
 
    for (var i = 0; i < layers.length; i++){
        var depth = layers[i].dataset.depth;
        var moveX = -currentX * depth * 300;
        var moveY = -currentY * depth * 300;
        layers[i].style.transform = "translate(" + moveX + "px, " + moveY + "px)";
    }
 
    requestAnimationFrame(animate);
}
animate()


//  -------- SOUND EFFECTS --------
var sounds = {
    hover: new Audio("sounds/pip.mp3"),
    start: new Audio("sounds/start.mp3"),
    continue: new Audio("sounds/select.mp3"),
    gallery: new Audio("sounds/select.mp3"),
    settings: new Audio("sounds/select.mp3")
}

sounds.hover.volume = 0.3;

function playSound(name){
    var sound = sounds[name];
    if (!sound) return;

    var copy = sound.cloneNode();
    copy.volume = sound.volume;
    copy.play();
}

for (var s = 0; s < options.length; s++){
    options[s].addEventListener("mouseenter", function (){
        playSound("hover");
    });
    options[s].addEventListener("focus", function (){
        playSound("hover");
    });
}

// ---------- 7. BACKGROUND MUSIC ----------
var music = new Audio("sounds/AmbienceCity.mp3");
music.loop = true;
music.volume = 0.4;
music.play();
