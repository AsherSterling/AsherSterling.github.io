var mouseX = 0;
var mouseY = 0;

var currentX = 0;
var currentY = 0;

function animate() {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

    for (var i = 0; i < layers.length; i++) {
        var depth = layers[i].dataset.depth;
        var moveX = -currentX * depth * 300;
        var moveY = -currentY * depth * 300;
        layers[i].style.transform = "translate(" + moveX + "px, " + moveY + "px)";
    }

    requestAnimationFrame(animate);

}