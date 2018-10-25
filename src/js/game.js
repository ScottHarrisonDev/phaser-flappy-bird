const config = {
    width: 600,
    height: 600,
    background: '#4fcdf9',
    obstacleSize: 50,
    obstacleGenerationInterval: 2600, // milliseconds
    gapHeight: 4
}

let canvas;
let player;
let obstacles = [];
let obstacleTimingCount = 0;
let gapLocation;
let blocksPerObstacle = config.height / config.obstacleSize;

function preload() {
}

function setup() {
    canvas = createCanvas(config.width, config.height);
    player = new Player();
    player.show();
    frameRate(60);

    gapLocation = Math.floor(random(blocksPerObstacle - config.gapHeight));
    for (let i = 0; i < blocksPerObstacle; i++) {
        if (i <= gapLocation || i > (gapLocation + config.gapHeight)) {
            obstacles.push(new Obstacle(i));
        }
    }
    obstacles.forEach(obstacle => obstacle.show());
    
}

function draw() {
    background(config.background);
    player.show(); // change this to update as per obstacles class
    
    obstacleTimingCount += Math.floor(window.performance.now() - canvas._pInst._lastFrameTime);
    if (obstacleTimingCount >= config.obstacleGenerationInterval) {
        gapLocation = Math.floor(random(blocksPerObstacle - config.gapHeight));
        for (let i = 0; i < blocksPerObstacle; i++) {
            if (i <= gapLocation || i > (gapLocation + config.gapHeight)) {
                obstacles.push(new Obstacle(i));
            }
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