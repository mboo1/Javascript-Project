console.log('webpack is working!2');
const MovingObject = require('./moving_object');
const EnemyOne = require('./enemy_one');
const GameView = require('./game_view');
// const resLoad = require('./resources');
// const Resourcer = require('./resources');

window.EnemyOne = EnemyOne;
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

let userName = '???';
let muteButton;
let soundStatus = true;


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
    document.getElementById('name-input').style.display = 'none';
    document.removeEventListener('keydown', handleRPress);
    muteButton.removeEventListener('click', toggleSoundStatus);
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    let gameView = new GameView(ctx, userName, soundStatus);
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
        muteButton = document.getElementById('mute-button');
        muteButton.addEventListener('click', toggleSoundStatus);
})

const toggleSoundStatus = () => {
    document.getElementById('game-canvas').focus();
    if (soundStatus) {
        soundStatus = false;
        document.getElementById('mute-icon').setAttribute('hidden', true)
        document.getElementById('muted-icon').removeAttribute('hidden')
    } else {
        soundStatus = true;
        document.getElementById('mute-icon').removeAttribute('hidden')
        document.getElementById('muted-icon').setAttribute('hidden', true)
    }
}

function handleRPress(e) {
    let nameField = document.getElementById('name-input')
    // console.log(nameField.value)
    if (e.keyCode === 13)  {
        userName = nameField.value || '???';
        begin();
    }
}


// setTimeout(() => {
//     // console.log('othertn2')
//     begin();
// }, 400)

// let loader = new Resourcer();
// loader.testo();

// loader.load([
//     './gimg/background.png',
//     './gimg/enemybig.png',
//     './gimg/enemysmall.png',
//     './gimg/enemysniper.png',
//     './gimg/explosion.png',
//     './gimg/laserbolts.png',
//     './gimg/ship.png',
//     './gimg/ship6.png',
// ]);

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











