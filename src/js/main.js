let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: '#4fcdf9'
};

let game = new Phaser.Game(config);
let bird;
let lastPipeAt = 0;
let pipes = [];
const speed = 5;
const flapForce = -350;
const maxPipes = config.height / 50;
const pipeGap = 4;
const pipeHeight = 50;
const pipeWidth = 50;

function preload ()
{
    this.load.spritesheet('bird', 
        'assets/bird.png',
        {
            frameWidth: 50,
            frameHeight: 50
        }
    );
    this.load.spritesheet('pipe', 
        'assets/pipe.png',
        {
            frameWidth: 50,
            frameHeight: 50
        }
    );
}

function create ()
{
    bird = this.physics.add.sprite(250, config.height / 2, 'bird');
}

function update ()
{
    this.input.on('pointerdown', function (pointer) {
        flap();
    });

    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.space.isDown)
    {
        flap();
    }
    
    let currentSecond = Math.floor(this.time.now / 1000);
    if (currentSecond % 3 === 0 && lastPipeAt < currentSecond) {
        let gapStart = Math.floor(Math.random() * (maxPipes - 2)) + 1;
        for (let i = 1; i <= maxPipes; i++) {
            if (i < gapStart || i >= (gapStart + pipeGap)) {
                pipes.push(this.add.sprite(config.width - pipeWidth, (i * pipeHeight) + (pipeHeight / 2), 'pipe'));
            }
        }
        lastPipeAt = currentSecond;
    }
    
    for(let i = 0; i < pipes.length; i++) {
        pipes[i].x -= speed;
    }

}

function flap ()
{
    bird.setVelocityY(flapForce);
}