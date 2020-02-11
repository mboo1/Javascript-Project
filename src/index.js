console.log('webpack is working!');
const MovingObject = require('./moving_object');
const EnemyOne = require('./enemy_one');
const GameView = require('./game_view');
// const resLoad = require('./resources');
const Resourcer = require('./resources');

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

// function begin() { document.addEventListener('DOMContentLoaded', () => {
//     console.log('rem');
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


// })}

function begin() { 
    console.log('rem');
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

}

begin = begin.bind(this);

// setTimeout(() => {
//     begin();
// }, 1000)
// begin();

// setTimeout(() => {
//     console.log('timer')
// }, 1000)

// setTimeout(() => {
//     console.log('othert')
//     begin();
// }, 3000)

let loader = new Resourcer();
loader.testo();

loader.load([
    '../img/background.png',
    '../img/enemybig.png',
    '../img/enemysmall.png',
    '../img/enemysniper.png',
    '../img/explosion.png',
    '../img/laserbolts.png',
    '../img/ship.png',
    '../img/Ship6.png',
]);
console.log(loader.resourceCache);
console.log(loader.readyCallbacks);
loader.onReady(begin);

// resLoad([
//     '../img/background.png',
//     '../img/enemybig.png',
//     '../img/enemysmall.png',
//     '../img/enemysniper.png',
//     '../img/explosion.png',
//     '../img/laserbolts.png',
//     '../img/ship.png',
//     '../img/Ship6.png',
// ]);
// resources.onReady(begin);












    // let red = new MovingObject({pos: [40,40], vel: [1,1], radius: 6, color: 'blue'})
    // red.draw(ctx);
    // window.red = red;
    // let blue = new EnemyOne({pos: [100,100]})
    // blue.draw(ctx);
    // window.blue = blue;