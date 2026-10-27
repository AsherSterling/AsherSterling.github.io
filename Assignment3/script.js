// -------- HOVER INTERACTION ---------
var layers = document.querySelectorAll(".layer");
var options = document.querySelectorAll(".option");

var mouseX = 0;
var mouseY = 0;

var currentX = 0;
var currentY = 0;

document.addEventListener("mousemove", function (e){
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
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

function playSound(hover){
    var sound = sounds[hover];
    if (!sound) return; 

    var copy = sound.cloneNode();
    copy.volume = sound.volume;
    copy.play();
}

for (var s = 0; s < options.length; s++){
    options[s].addEventListener("mouseenter", function (){
        playSound("hover");
    })

    options[s].addEventListener("focus", function (){
        if (this.matches(":focus-visible")){
            playSound("hover");
        }
    })
}

copy.play().catch(function (err){
    console.log("sound didn't play:", err);
})


var bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.3; 

// -------- IDLE DARKNESS --------
var gloom = document.getElementById("gloom");
var idleTime = 0;

function resetIdle(){
    idleTime = 0;
    gloom.style.setProperty("--gloom", 0);
}

setInterval(function (){
    idleTime = idleTime + 1;
    if (idleTime > 10){
        var amount = Math.min((idleTime - 10) / 50, 0.85);
        gloom.style.setProperty("--gloom", amount);
    }
}, 1000);