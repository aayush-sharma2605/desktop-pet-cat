const cat = document.getElementById("cat");

const frames = [
    "assets/cat1.png",
    "assets/cat1.png", 
    "assets/cat1.png",
    "assets/cat1.png", 
    "assets/cat1.png",
    "assets/cat1.png", 
    "assets/cat1.png",
    "assets/cat1.png",
    "assets/cat3.png",
    "assets/cat1.png",
    "assets/cat1.png",    
    "assets/cat1.png",
    "assets/cat1.png", 
    "assets/cat1.png",
    "assets/cat1.png", 
    "assets/cat1.png",
    "assets/cat1.png", 
];

let frameIndex = 0;

let catX = 200;
let catY = 200;

let mouseX = 200;
let mouseY = 200;

// Track mouse
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Blink animation every 100ms
setInterval(() => {
    cat.src = frames[frameIndex];
    frameIndex = (frameIndex + 1) % frames.length;
}, 100);

// Movement loop
function update() {

    const dx = mouseX - catX;
    const dy = mouseY - catY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 50) {
        catX += dx * 0.03;
        catY += dy * 0.03;
    }

    // Face direction
    if (dx < 0) {
        cat.style.transform = "scaleX(-1)";
    } else {
        cat.style.transform = "scaleX(1)";
    }

    cat.style.left = catX + "px";
    cat.style.top = catY + "px";

    requestAnimationFrame(update);
}

update();