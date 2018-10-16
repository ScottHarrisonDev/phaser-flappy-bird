function Obstacle(position) {
    
    this.pos = createVector(config.width, position * config.obstacleSize);
    this.speed = 4;

    this.show = function() {
        push();
        fill(0);
        rect(this.pos.x, this.pos.y, config.obstacleSize, config.obstacleSize);
        pop();
    }

    this.update = function() {
        this.pos.x -= this.speed;
        this.show();
    }

}