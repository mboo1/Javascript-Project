const MovingObject = require('./moving_object');
const Enemy = require('./enemy');
const EnemyBullet = require('./enemy_bullet');
const Sprite = require('./sprite');

class EnemyOne extends Enemy {
    constructor(props) {
        super(props);
        this.color = 'white';
        this.radius = 12;
        this.vel = [3, 0.5];
        this.timer = 0;
        this.sprite = new Sprite('../img/enemysmall.png', [0,0], [16,16], [22, 22], 0.5, [0, 1], 'horizontal');
    }

    fire() {
        if (this.timer % 120 === 0) {
            let nuBullet = new EnemyBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [0, 3.5]})
            this.game.enemies.push(nuBullet);
        }
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        if (this.pos[0] < 10) {
            this.vel = [3,0.5]
        } else if (this.pos[0] > 490) {
            this.vel = [-3, 0.5]
        }
        this.timer += 1;
        this.fire();
    }

    draw(ctx) {
        // ctx.fillStyle = this.color;

        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        // );
        // ctx.fill();
        this.sprite.render(ctx, this.pos[0]-this.radius+2, this.pos[1]-this.radius+2);
    }
}

module.exports = EnemyOne