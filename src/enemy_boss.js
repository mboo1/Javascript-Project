const Enemy = require('./enemy');
const Sprite = require('./sprite');
const EnemyBullet = require('./enemy_bullet');
const EnemyBigBullet = require('./enemy_big_bullet');

class EnemyBoss extends Enemy {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.radius = 72;
        this.vel = [0, 1];
        this.pos = [250, -50]
        this.timer = 0;
        this.value = 1000;
        this.okay = true;
        this.hp = 50;
        this.sprite = new Sprite('./gimg/ship6.png', [0,0], [156,156], [300, 300], 8, [0], 'horizontal');
    }

    fire() {
        if (this.timer === 300 || this.timer % 1900 === 0)  {
            let waves = 0;
            let haloWaves = setInterval(() => {
                waves += 1;
                this.fireBulletHalo(65);
                if (waves === 4) clearInterval(haloWaves)
            },1000)
        }
        if (this.timer % 120 === 0) {
            let nuBullet = new EnemyBigBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [0, 4]})
            this.game.enemies.push(nuBullet);
        }
    }

    fireBulletHalo(rounds) {
        let roundsFired = 0;
        let xSpeed = -2;
        let ySpeed = 0;
        let xFalling = false;
        let yFalling = true;
        let bulletTime = setInterval(() => {
            let nuBullet = new EnemyBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [xSpeed, ySpeed]});
            this.game.enemies.push(nuBullet);
            roundsFired += 1
            if (xFalling === true) {
                xSpeed -= 0.3;
            } else {
                xSpeed += 0.3;
            }
            if (yFalling === true) {
                ySpeed -= 0.3;
            } else {
                ySpeed += 0.3;
            }
            // (xFalling === true) ? xSpeed -= 0.1 : xSpeed += 0.1;
            // (yFalling === true) ? ySpeed -= 0.1 : ySpeed += 0.1;
            if (xSpeed <= -2) xFalling = false;
            if (xSpeed >= 2) xFalling = true;
            if (ySpeed <= -2) yFalling = false;
            if (ySpeed >= 2) yFalling = true;
            if (roundsFired === rounds || this.hp === 0) clearInterval(bulletTime)
        }, 200);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        // DIM hardcode
        if (this.pos[1] > 480) { 
            this.vel = [0,-1]
        } 
        this.timer += 1;
        if (this.timer % 180 === 0) {
            let newX = Math.random() - Math.random() *1.5;
            let newY = Math.random() - Math.random();
            this.vel = [newX, newY];
        } if (this.timer > 300) {
            if (this.pos[0] < 10) this.vel[0] = 0.75;
            if (this.pos[0] > 490) this.vel[0] = -0.75;
            if (this.pos[1] < 10) this.vel[1] = 0.75;
            if (this.pos[1] > 250) this.vel[1] = -0.75;
        }
        this.fire();
    }

    draw(ctx) {
        this.sprite.render(ctx, this.pos[0]-this.radius-50, this.pos[1]-this.radius-50);
    }


}

module.exports = EnemyBoss;
