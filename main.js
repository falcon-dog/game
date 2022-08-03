
let cursors;
let player;
class GameScene extends Phaser.Scene {
    constructor() {
        super();
    }
    preload() {
        cursors = this.input.keyboard.createCursorKeys();

        this.load.spritesheet('dude', "assets/dogan.png", { frameWidth: 32, frameHeight: 32 });
    }
    create() {
        player = this.physics.add.sprite(100, 450, 'player');

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 2, end: 3 }),
            frameRate: 10,
            repeat: -1
        });


        player.width = 32;
        player.height = 32;
        console.log(this.anims.get("idle"));
        console.log(cursors);
    }
    update() {
        const MAX_VEL = 100;
        if (cursors.up.isDown) {
            player.setVelocityY(-MAX_VEL);
            //player.anims.play("up"); 
        } else if (cursors.down.isDown) {
            player.setVelocityY(MAX_VEL);
            //player.anims.play("up"); 
        } else if (cursors.left.isDown) {
            player.anims.play("left"); 
            player.setVelocityX(-MAX_VEL);
        } else if (cursors.right.isDown) {
            player.anims.play("right"); 
            player.setVelocityX(MAX_VEL);
        } else {
            player.setVelocityX(0);
            player.setVelocityY(0);
        }
    }
}

let config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,

    },
    scene: GameScene,
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        }
    }
};


let game = new Phaser.Game(config);
