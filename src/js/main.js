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
let pipes;

function preload ()
{
    this.load.spritesheet('bird', 
        'assets/bird.png',
        {
            frameWidth: 50,
            frameHeight: 50
        }
    );
}

function create ()
{
    bird = this.physics.add.sprite(config.width / 2, config.height / 2, 'bird');
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
}

function flap ()
{
    bird.setVelocityY(-400);
}