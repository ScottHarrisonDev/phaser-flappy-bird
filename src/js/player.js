function Player() {

    this.height = 50;
    this.width = 50;
    this.pos = createVector(200, (config.height / 2) - (this.height / 2));
    this.mass = 100;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);

    this.show = function() {

        this.applyGravity();
        this.update();

        push();
        fill(0);
        rect(this.pos.x, this.pos.y, this.width, this.height);
        pop();
    }

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.applyGravity = function() {
        const gravity = createVector(0, 0.2 * this.mass);
        this.applyForce(gravity);
    }

    this.applyForce = function(force) {
        const f = p5.Vector.div(force,this.mass);
        this.acceleration.add(f);
    };

    this.flap = function() {
        this.velocity = createVector(0, 0);
        const force = createVector(0, -600);
        this.applyForce(force);
    }
      

}