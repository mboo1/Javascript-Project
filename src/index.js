console.log('webpack is working!');
const MovingObject = require('./moving_object');
const EnemyOne = require('./enemy_one');
const GameView = require('./game_view');

window.EnemyOne = EnemyOne;
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

class keyStatus {
    constructor() {
        this.pressed = {}
    }
    isDown(keyCode) {
        return this.pressed[keyCode]
    };

    onKeydown(event) {
        this.pressed[event.keyCode] = true;
        // console.log(this.pressed)
    };

    onKeyup(event) {
        delete this.pressed[event.keyCode];
    }
}

var img = new Image();
img.src = '../img/ship.png';

img.onload = function() {
     document.addEventListener('DOMContentLoaded', () => {
        let canvas = document.getElementById('game-canvas');
        let ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        let gameView = new GameView(ctx);
        gameView.start();
        let gameShip = gameView.game.ships[0]
        let gameStatus = new keyStatus;
        document.addEventListener('keyup', function(event) {
            gameStatus.onKeyup(event);
            gameShip.takeMove(gameStatus)
            }, false);
        document.addEventListener('keydown', function(event) {
            gameStatus.onKeydown(event);
            gameShip.takeMove(gameStatus);
        }, false)


    })
};

    // document.addEventListener('DOMContentLoaded', () => {
    //     let canvas = document.getElementById('game-canvas');
    //     let ctx = canvas.getContext('2d');
    //     ctx.imageSmoothingEnabled = false;
    //     let gameView = new GameView(ctx);
    //     gameView.start();
    //     let gameShip = gameView.game.ships[0]
    //     let gameStatus = new keyStatus;
    //     document.addEventListener('keyup', function(event) {
    //         gameStatus.onKeyup(event);
    //         gameShip.takeMove(gameStatus)
    //         }, false);
    //     document.addEventListener('keydown', function(event) {
    //         gameStatus.onKeydown(event);
    //         gameShip.takeMove(gameStatus);
    //     }, false)


    // })









    // let red = new MovingObject({pos: [40,40], vel: [1,1], radius: 6, color: 'blue'})
    // red.draw(ctx);
    // window.red = red;
    // let blue = new EnemyOne({pos: [100,100]})
    // blue.draw(ctx);
    // window.blue = blue;