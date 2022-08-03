let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


let game = new Phaser.Game(config);

let cursors;
class GameScene extends Phaser.Scene {
    constructor() {
    }
    preload() {
        cursors = this.input.keyboard.createCursorKeys();
    }
    create() {
        console.log(cursors);
    }
    update() {
        let test = this.GameObjects.Shape(this,);
        test.x = 0.0;
        test.y = 0.0;
    }
}



function update() {

}