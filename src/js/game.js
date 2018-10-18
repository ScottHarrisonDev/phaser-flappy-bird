const config = {
    width: 600,
    height: 600,
    background: '#4fcdf9',
    obstacleSize: 50,
    obstacleGenerationInterval: 3000 // milliseconds
}

let canvas;
let player;
let obstacles = [];
let obstacleTimingCount = 0;

function preload() {
}

function setup() {
    canvas = createCanvas(config.width, config.height);
    player = new Player();
    player.show();
    frameRate(60);

    for (let i = 0; i < (config.height / config.obstacleSize); i++) {
        obstacles.push(new Obstacle(i));
    }
    obstacles.forEach(obstacle => obstacle.show());
    
}

function draw() {
    background(config.background);
    player.show(); // change this to update as per obstacles class
    
    obstacleTimingCount += Math.floor(window.performance.now() - canvas._pInst._lastFrameTime);
    if (obstacleTimingCount >= config.obstacleGenerationInterval) {
        for (let i = 0; i < (config.height / config.obstacleSize); i++) {
            obstacles.push(new Obstacle(i));
        }
        obstacles.forEach(obstacle => obstacle.show());
        obstacleTimingCount = 0;
    }
    
    obstacles.forEach(obstacle => obstacle.update());
}

function keyPressed() {
    if (keyCode === 32) {
        player.flap();
    }
}