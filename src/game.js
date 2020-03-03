const DIM_X = 500;
const DIM_Y = 500;

const SCROLL_SPEED = 10;
let imgPos = 0;

const EnemyOne = require('./enemy_one');
const EnemyFlanker = require('./enemy_flanker');
const EnemySniper = require('./enemy_sniper');
const EnemyBoss = require('./enemy_boss');
const EnemyControl = require('./enemy_control');
const Ship = require('./ship');
const PlayerBullet = require('./player_bullet');
const Enemy = require('./enemy');
const EnemyBullet = require('./enemy_bullet');
const Explosion = require('./explosion');

class Game {
    constructor(options) {
        this.gameView = options.gameView;
        this.enemies = [];
        this.ships = [];
        this.playerBullets = [];
        this.explosions = [];
        // this.addEnemies();
        this.addShip();
        this.background = new Image();
        this.background.src = './gimg/background.png';
        this.gameTime = 0;
        this.wave = 0;
        this.score = 0;
        this.round = 2;
        this.bossSpawn = true;
        this.controlSpawn = true;
        // this.userName = this.gameView.username
        this.highScores = [['MAB', 10000], ['MAB', 5000], ['MAB', 2500], ['MAB', 1000], ['MAB', 0]]
    }

    addEnemyOnes(squads) {
        let squadsAdded = 0;
        let addSquads = setInterval(() => {
            let coord = 30;
            for (let i = 0; i < 4; i ++) {
                let newEn = new EnemyOne({pos: [coord, coord], game: this});
                this.enemies.push(newEn);
                coord += 20;
            }
            squadsAdded += 1;
            if (squadsAdded === squads || this.gameView.gameOver === true) clearInterval(addSquads);
        }, 3000);
    }

    addEnemySnipers(units) {
        let unitsAdded = 0;
        let addUnits = setInterval(() => {
            let coord = 0;
            let newEn = new EnemySniper({pos: [coord, coord], game: this});
            this.enemies.push(newEn);
            unitsAdded += 1;
            if (unitsAdded === units || this.gameView.gameOver === true) clearInterval(addUnits);
        }, 1000)
    }

    addEnemyFlankers(squads) {
        let squadsAdded = 0;
        let addSquads = setInterval(() => {
            let coordX = 30;
            let coordY = 0;
            for (let i = 0; i < 4; i++) {
                let newEn = new EnemyFlanker({ pos: [coordX, coordY], game: this });
                this.enemies.push(newEn);
                (coordX === 30) ? coordX = DIM_Y -30 : coordX = 30;
                coordY -= 50; 
            }
            squadsAdded += 1;
            if (squadsAdded === squads || this.gameView.gameOver === true) clearInterval(addSquads);
        }, 3000)
    }

    addEnemyBoss(squads) {
        for (let i =0; i < squads; i++) {
            let newEn = new EnemyBoss({pos: [0,0], game: this});
            this.enemies.push(newEn);
        }
    }

    addEnemyControl(squads) {
        for (let i =0; i < squads; i++) {
            let newEn = new EnemyControl({game: this});
            this.enemies.push(newEn);
        }
    }

    addEnemies() {
        if (this.gameTime > 2 && (this.wave === 0 || this.wave % 5 === 0)) {
            this.wave += 1;
            // this.addEnemyBoss(1);
            // this.addEnemyControl(1);
            this.bossSpawn = true;
            this.controlSpawn = true;
            this.addEnemyOnes(this.round)
        } 
        if (this.gameTime > 15 && (this.wave === 1 || (this.wave-1) % 5 === 0 )) {
            this.wave += 1;
            this.addEnemyFlankers(this.round)
        } if (this.gameTime > 30 && (this.wave === 2 || (this.wave-2) % 5 === 0 )) {
            this.wave += 1;
            this.addEnemySnipers(this.round)
        } if (this.bossSpawn && this.gameTime > 48 && (this.wave === 3 || (this.wave-3) % 5 === 0)) {
            this.bossSpawn = false;
            this.addEnemyBoss(1);
            this.round += 1;
        } if (this.controlSpawn && (this.wave === 4 || (this.wave-4) % 5 === 0)) {
            this.controlSpawn = false;
            this.addEnemyControl(1);
        }

        if (!this.gameView.gameOver) this.gameTime += this.gameView.dt
    }

    checkOutOfBounds() {
        this.allObjects().forEach(obj => {
            if (obj.pos[0] < -250 || obj.pos[0] > DIM_X + 250 || obj.pos[1] < -150 || obj.pos[1] > DIM_Y + 250) {
                if (!(obj instanceof Ship)) this.remove(obj)
            }
            if (obj instanceof Ship) {
                if (!this.gameView.gameOver) this.keepPlayerInBounds();
             }
        })
    }

    keepPlayerInBounds() {
        let gameShip = this.ships[0];
        if (gameShip.pos[0] < 10) {
            gameShip.pos[0] = 10;
        } else if (gameShip.pos[0] > DIM_X -20 ) {
            gameShip.pos[0] = DIM_X - 20;
        }
        if (gameShip.pos[1] < 10) {
            gameShip.pos[1] = 10;
        } else if (gameShip.pos[1] > DIM_Y -20) {
            gameShip.pos[1] = DIM_Y - 20;
        }
    }

    checkCollisions() {
        this.allObjects().forEach(obj1 => {
            this.allObjects().forEach(obj2 => {
                if (obj1 !== obj2 && obj1.hasCollidedWith(obj2)) {
                    obj1.collideWith(obj2)
                }
            })
        })
    }

    remove(obj) {
        if (obj instanceof Enemy) {
            this.enemies.splice(this.enemies.indexOf(obj), 1);
        } else if (obj instanceof Ship) {
            this.ships.splice(this.ships.indexOf(obj), 1);
        } else if (obj instanceof PlayerBullet) {
            // console.log(obj)
            this.playerBullets.splice(this.playerBullets.indexOf(obj), 1);
        } else if (obj instanceof Explosion) {
            this.explosions.splice(this.explosions.indexOf(obj), 1);
        } else {
            // console.log("I dont know what that is");
        }
    }

    addShip() {
        let newShip = new Ship({pos: [DIM_X /2, DIM_Y/2], game: this, gameView: this.gameView})
        this.ships.push(newShip)
    }

    allObjects() {
        let allObj = this.enemies.concat(this.ships);
        allObj = allObj.concat(this.playerBullets);
        allObj = allObj.concat(this.explosions);
        return allObj;
    }

    drawBackground(ctx) {
        ctx.drawImage(
            this.background,
            0, imgPos, DIM_X, DIM_Y);
        ctx.drawImage(
            this.background,
            0, imgPos - DIM_Y, DIM_X, DIM_Y
        );
        imgPos += 0.5;
        if (imgPos > DIM_Y) imgPos = 0;
    }
    

    draw(ctx) {
        ctx.clearRect(0,0, DIM_X, DIM_Y);
        this.drawBackground(ctx);
        this.allObjects().forEach(obj => {
            obj.draw(ctx)
        })
        this.drawGameInfo(ctx);
    }

    drawGameInfo(ctx) {
        ctx.font = '20px VT323';
        ctx.fillStyle = 'yellow'
        ctx.fillText(`Score: ${this.score}`, DIM_X-100, 20);
        ctx.fillText(`Wave: ${this.wave}`, 20, 20);
        ctx.fillText(`Health: ${this.ships[0].hp}`, 250, 20)
    }

    moveObjects() {
        this.allObjects().forEach(obj => {
            obj.move();
            // if (obj instanceof EnemyOne || obj instanceof Ship || obj instanceof EnemyBullet || obj instanceof Explosion) {
                obj.sprite.updateSprite(this.gameView.dt);
                if (obj.sprite.done === true) this.remove(obj);
            // }
        })
        this.checkCollisions();
        this.checkOutOfBounds();
        // this.ships[0].sprite.updateSprite(this.gameView.dt);
    }

    
}

module.exports = Game