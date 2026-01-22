const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


const player = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 20,
    color: "cyan",
    speed: 4
}

const keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);



function update() {
    if(keys["ArrowUp"] && player.y - player.radius > 0) player.y -= player.speed;
    if(keys["ArrowDown"] && player.y + player.radius < canvas.height) player.y += player.speed;
    if(keys["ArrowLeft"] && player.x - player.radius > 0) player.x -= player.speed;
    if(keys["ArrowRight"] && player.x + player.radius < canvas.width) player.x += player.speed;
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI*2);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.closePath();
}


function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}


gameLoop();









