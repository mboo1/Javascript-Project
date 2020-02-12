const Game = require('./game')

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.dt = 0;
        this.lastTime = 1138;
        this.game = new Game({gameView: this});
        this.runGame = this.runGame.bind(this);
        this.gameOver = false;
        this.reset = this.reset.bind(this);
        this.firstGame = true;
        this.animationRef = 0;
    }

    reset() {
        document.getElementById('play-again').removeEventListener('click', () => {
            this.reset();
        });
        this.game.enemies = [];
        this.game.playerBullets = [];
        this.game.gameTime = 0;
        this.game.wave = 0;
        this.game.score = 0;
        this.lastTime = 1138;
        this.dt = 0;
        this.animationRef = 0;
        document.getElementById('game-over').style.display = 'none';
        // document.getElementById('game-canvas').style.display = 'block';
        // document.getElementById('game-over-overlay').style.display = 'none';
        this.gameOver = false;
        this.firstGame = false;
        this.game.ships[0].pos = [250, 250];
        // this.start();
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
            document.getElementById('game-over').style.display = 'block';
            // document.getElementById('game-canvas').style.display = 'none';
            // document.getElementById('game-over-overlay').style.display = 'block';
            document.getElementById('play-again').addEventListener('click', () => {
                this.reset();
            });
        }
    }

    start() {
        document.getElementById('game-over').style.display = 'none';
        // document.getElementById('game-over-overlay').style.display = 'none';
        if (this.firstGame) this.animationRef = requestAnimationFrame(this.runGame);
    //     if (this.firstGame) {setInterval(() => {
    //         this.game.addEnemies();
    //     }, 3000)
    // }
    }




}

module.exports = GameView


// this.fpsInterval = 50;
// this.then = Date.now();
// this.startTime = this.then;
