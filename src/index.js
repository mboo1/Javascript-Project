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

function begin() { 
    document.getElementById('game-start').style.display = 'none';
    document.getElementById('launch-message').style.display = 'none';
    document.removeEventListener('keydown', handleRPress);
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

document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('game-over').style.display = 'none';
        document.addEventListener('keydown', handleRPress);
})

function handleRPress(e) {
    if (e.keyCode === 82) begin();
}


// setTimeout(() => {
//     // console.log('othertn2')
//     begin();
// }, 400)

let loader = new Resourcer();
loader.testo();

loader.load([
    './gimg/background.png',
    './gimg/enemybig.png',
    './gimg/enemysmall.png',
    './gimg/enemysniper.png',
    './gimg/explosion.png',
    './gimg/laserbolts.png',
    './gimg/ship.png',
    './gimg/ship6.png',
]);
// loader.onReady(begin);


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











