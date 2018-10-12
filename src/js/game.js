const config = {
    width: 600,
    height: 600,
    background: '#4fcdf9'
}

let canvas;
let player;
let obstacles;

function preload() {
}

function setup() {
    canvas = createCanvas(config.width, config.height);
    player = new Player();
}

function draw() {
    background(config.background);
    player.show();
}

function keyPressed() {
    if (keyCode === 32) {
        player.flap();
    }
}