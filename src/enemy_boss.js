const Enemy = require('./enemy');
const Sprite = require('./sprite');
const EnemyBullet = require('./enemy_bullet');

class EnemyBoss extends Enemy {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.radius = 64;
        this.vel = [0, 0];
        this.pos = [250, 250]
        this.timer = 0;
        this.okay = true;
        this.sprite = new Sprite('./gimg/ship6.png', [0,0], [156,156], [300, 300], 8, [0], 'horizontal');
    }

    fire() {
        if (this.timer % 180 === 0 && this.okay) {
            this.fireBulletHalo(100)
            // this.okay = false;
        }
    }

    fireBulletHalo(rounds) {
        let roundsFired = 0;
        let xSpeed = 2;
        let ySpeed = 0;
        let xFalling = true;
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
            if (roundsFired === rounds) clearInterval(bulletTime)
        }, 150);
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
            // let newX = Math.random() - Math.random() *1.5;
            // let newY = Math.random() - Math.random();
            // this.vel = [newX, newY];
        } if (this.timer > 180) {
            if (this.pos[0] < 10) this.vel[0] = 0.75;
            if (this.pos[0] > 490) this.vel[0] = -0.75;
            if (this.pos[1] < 10) this.vel[1] = 0.75;
            if (this.pos[1] > 250) this.vel[1] = -0.75;
        }
        this.fire();
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        );
        // ctx.fill();
        this.sprite.render(ctx, this.pos[0]-this.radius-100, this.pos[1]-this.radius-100);
    }


}

module.exports = EnemyBoss;