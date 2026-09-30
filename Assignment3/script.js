const video = document.getElementById("bg-video");
const section = document.querySelector(".scroll-section");

let targetTime = 0;

function onScroll() {
  const rect = section.getBoundingClientRect();
  const scrollable = section.offsetHeight - window.innerHeight;
  const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
  targetTime = progress * video.duration;
}

// Smoothly ease toward the target time each frame
function update() {
  if (video.duration) {
    video.currentTime += (targetTime - video.currentTime) * 0.15;
  }
  requestAnimationFrame(update);
}

video.addEventListener("loadedmetadata", () => {
  onScroll();
  update();
});
window.addEventListener("scroll", onScroll);