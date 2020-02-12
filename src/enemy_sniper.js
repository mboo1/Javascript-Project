const MovingObject = require('./moving_object');
const Enemy = require('./enemy');
const EnemyBullet = require('./enemy_bullet');
const EnemyBigBullet = require('./enemy_big_bullet');
const Sprite = require('./sprite');

class EnemySniper extends Enemy {
    constructor(props) {
        super(props);
        this.value = 50;
        this.color = 'red';
        this.radius = 30;
        this.vel = [2, 0.5];
        this.timer = 0;
        this.hp = 5;
        this.sprite = new Sprite('./gimg/enemysniper.png', [0,0], [32,16], [96, 50], 12, [0, 1], 'horizontal');
    }

    fire() {
        if (this.timer % 120 === 0) {
            let nuBullet = new EnemyBigBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [0, 5]})
            this.game.enemies.push(nuBullet);
        }
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
            let newX = Math.random() - Math.random();
            let newY = Math.random() - Math.random();
            this.vel = [newX, newY];
        } if (this.timer > 180) {
            if (this.pos[0] < 10) this.vel[0] = 0.25;
            if (this.pos[0] > 490) this.vel[0] = -0.25;
            if (this.pos[1] < 10) this.vel[1] = 0.25;
            if (this.pos[1] > 490) this.vel[1] = -0.25;
        }
        this.fire();
    }

    draw(ctx) {
        // ctx.fillStyle = this.color;

        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        // );
        // ctx.fill();
        this.sprite.render(ctx, this.pos[0]-this.radius-20, this.pos[1]-this.radius);
    }
}

module.exports = EnemySniper