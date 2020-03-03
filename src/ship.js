const MovingObject = require('./moving_object');
const PlayerBullet = require('./player_bullet');
const Enemy = require('./enemy');
const Sprite = require('./sprite');
// import shipSprite from './../img/ship.png';

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const BULLET_COUNT = 5;

class Ship extends MovingObject {
    constructor(props) {
        super(props);
        this.color = 'green';
        this.radius = 18;
        this.vel = [0, 0];
        this.speed = 2.55;
        this.hp = 3;
        this.immune = false;
        this.flicker = true;
        this.gameView = props.gameView;
        this.prevFire = 0;
        this.fireEffect = document.createElement("audio");
        this.fireEffect.src = "./gimg/laserfx2.wav";
        this.fireEffect.volume = 0.2;
        this.hitEffect = document.createElement("audio");
        this.hitEffect.src = "./gimg/hurt.wav";
        // this.sprite = new Sprite('../img/ship.png', [0,0], [15,24], [50, 50], 16, [0, 1, 2, 3, 4, 3, 2, 1], 'horizontal');
        this.sprite = new Sprite('./gimg/ship.png', [32,0], [17,24], [50, 50], 16, [0, 1], 'vertical');
        this.sprites = {
            bankLeft: new Sprite('./gimg/ship.png', [0,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),
            static: new Sprite('./gimg/ship.png', [32,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),
            bankRight: new Sprite('./gimg/ship.png', [64,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),
            lightRight: new Sprite('./gimg/ship.png', [48,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),
            lightLeft: new Sprite('./gimg/ship.png', [16,0], [16,24], [50, 50], 16, [0, 1], 'vertical')
        }
    }

    takeMove(keyStatus) {

        if (!this.gameView.gameOver) {
            (keyStatus.isDown(LEFT)) ? this.vel[0] = -this.speed : this.vel[0] = 0;
            if (keyStatus.isDown(RIGHT)) this.vel[0] = this.speed;
            (keyStatus.isDown(UP)) ? this.vel[1] = -this.speed : this.vel[1] = 0;
            if (keyStatus.isDown(DOWN)) this.vel[1] = this.speed;
            if (keyStatus.isDown(32)) this.fireBullet();
        }

    }

    fireBullet() {
        if (Date.now() - this.prevFire > 160) {
            let newBullet = new PlayerBullet({pos: [this.pos[0], this.pos[1]-13], game: this.game, gameView: this.gameView});
            if (this.game.playerBullets.length <= BULLET_COUNT) {
                this.game.playerBullets.push(newBullet);
                if (!this.gameView.muted) {
                    this.fireEffect.load();
                    this.fireEffect.play();
                }
            }
            this.prevFire = Date.now();
        }
    }

    collideWith(otherObject) {
        if (otherObject instanceof Enemy && !this.immune && this.hp >= 1) {
            this.hitEffect.load();
            this.hitEffect.play();
            this.hp -= 1;
            this.immune = true;
            setTimeout(() => {
                this.immune = false;
            }, 1000)
            if (this.hp < 1) {
                this.gameView.gameOver = true;
                this.pos = [-40, -40];
                this.vel[0] = 0;
                this.vel[1] = 0;
            }
        }
    }

    draw(ctx) {
        // ctx.fillStyle = 'pink';

        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        // );
        // ctx.fill();
        if (this.vel[0] < 0 && this.vel[1] !== 0) {
            this.sprite = this.sprites.lightLeft;
        } else if (this.vel[0] > 0 && this.vel[1] !== 0) {
            this.sprite = this.sprites.lightRight;
        } else if (this.vel[0] > 0) {
            this.sprite = this.sprites.bankRight;
        } else if (this.vel[0] < 0) {
            this.sprite = this.sprites.bankLeft
        } else {
            this.sprite = this.sprites.static;
        }
        if (!this.immune) {
            this.sprite.render(ctx, this.pos[0]-this.radius-3, this.pos[1]-this.radius);
        } else if (this.flicker) {
            this.sprite.render(ctx, this.pos[0]-this.radius-3, this.pos[1]-this.radius);
            this.flicker = false;
        } else {
            this.flicker = true;
        }
    }

}

module.exports = Ship;

// moveLeft() {
//     // this.pos[0] -= this.speed;
//     this.vel[0] = -1
// }

// moveRight() {
//     // this.pos[0] += this.speed;
//     this.vel = [1, 0]
//     console.log(this.vel)
// }

// moveUp() {
//     // this.pos[1] -= this.speed;
//     this.vel[1] = -1
// }

// moveDown() {
//     // this.pos[1] += this.speed;
//     this.vel[1] = 1
// }

        // switch (dir) {
        //     case 'left':
        //         this.pos[0] -= this.speed
        //         break
        //     case 'right':
        //         this.pos[0] += this.speed
        //         break
        //     case 'up':
        //         this.pos[1] -= this.speed
        //         break
        //     case 'down':
        //         this.pos[1] += this.speed
        //         break
        //     default:
        //         console.log('what')
        // }