let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

let game = new Phaser.Game(config);

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