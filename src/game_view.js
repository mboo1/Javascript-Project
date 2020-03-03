const Game = require('./game')
// const aud = require('../audio/homehold.mp3')

class GameView {
    constructor(ctx, userName, soundStatus) {
        this.ctx = ctx;
        this.userName = userName;
        this.dt = 0;
        this.lastTime = 1138;
        this.game = new Game({gameView: this});
        this.runGame = this.runGame.bind(this);
        this.gameOver = false;
        this.reset = this.reset.bind(this);
        this.firstGame = true;
        this.animationRef = 0;
        this.handleQPress = this.handleQPress.bind(this);
        this.addScore = this.addScore.bind(this);
        this.backgroundMusic = new Audio('./gimg/homehold.mp3');
        this.muteButton = document.getElementById('mute-button');
        this.toggleSound = this.toggleSound.bind(this);
        this.muteButton.addEventListener('click', this.toggleSound);
        this.muted = !soundStatus;
    }

    reset() {
        document.removeEventListener('keydown', this.handleQPress);
        this.checkScores();
        this.addScore();
        this.game.enemies = [];
        this.game.playerBullets = [];
        this.game.gameTime = 0;
        this.game.wave = 0;
        this.game.ships[0].hp = 3;
        this.game.score = 0;
        this.game.round = 2;
        this.lastTime = 1138;
        this.dt = 0;
        this.animationRef = 0;
        document.getElementById('game-over').style.display = 'none';
        this.gameOver = false;
        this.firstGame = false;
        this.game.ships[0].pos = [250, 250];
    }

    checkScores() {
        let newScores = [];
        while (newScores.length < 5) {
            if (this.game.score > this.game.highScores[0][1]) {
                newScores.push([this.userName, this.game.score])
                this.game.score = 0;
            } else {
                newScores.push(this.game.highScores.shift())
            }
        }
        this.game.highScores = newScores;
    }

    addScore() {
        let scoreList = document.getElementById("scores-list");
        while (scoreList.firstChild) {
            scoreList.removeChild(scoreList.firstChild)
        }
        this.game.highScores.forEach((score) => {
            let node = document.createElement("LI");
            let textnode = document.createTextNode(`${score[0]}: ${score[1]}`);
            node.appendChild(textnode);
            scoreList.appendChild(node);
        })
    }

    runGame(timestamp) {
        let now = Date.now();
        if (this.lastTime === 1138) this.lastTime = Date.now() - 0.25;
        this.dt = (now - this.lastTime) / 1000.0;
        this.game.moveObjects();
        this.game.draw(this.ctx);
        this.game.addEnemies();
        this.lastTime = now;
        if (!this.gameOver) {
            this.animationRef = requestAnimationFrame(this.runGame);
        } else {
            // cancelAnimationFrame(this.animationRef);
            this.animationRef = requestAnimationFrame(this.runGame);
            this.animationRef = 0;
            document.getElementById('game-over').style.display = 'flex';
            document.addEventListener('keydown', this.handleQPress);
        }
    }

    handleQPress(e) {
        if (e.keyCode === 13) this.reset();
    }

    toggleSound(e) {
        e.preventDefault();
        document.getElementById('game-canvas').focus();
        if (this.muted) {
            this.backgroundMusic.play();
            this.muted = false;
            document.getElementById('mute-icon').removeAttribute('hidden')
            document.getElementById('muted-icon').setAttribute('hidden', true)
        } else {
            this.backgroundMusic.pause();
            this.muted = true;
            document.getElementById('mute-icon').setAttribute('hidden', true)
            document.getElementById('muted-icon').removeAttribute('hidden')
        }
    }

    start() {
        document.getElementById('game-over').style.display = 'none';
        this.backgroundMusic.loop = true;
        if (!this.muted) this.backgroundMusic.play();
        this.addScore();
        if (this.firstGame) this.animationRef = requestAnimationFrame(this.runGame);
    }




}

module.exports = GameView


// this.fpsInterval = 50;
// this.then = Date.now();
// this.startTime = this.then;
