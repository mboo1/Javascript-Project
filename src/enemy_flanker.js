const MovingObject = require('./moving_object');
const Enemy = require('./enemy');
const EnemyBullet = require('./enemy_bullet');
const Sprite = require('./sprite');

class EnemyFlanker extends Enemy {
    constructor(props) {
        super(props);
        this.value = 20;
        this.color = 'white';
        this.radius = 12;
        this.vel = [0, 1];
        this.timer = 0;
        this.sprite = new Sprite('./gimg/enemysmall.png', [0,16], [16,16], [22, 22], 0.5, [0, 1], 'horizontal');
        this.pos[0] > 50 ? this.bulletDir = -3 : this.bulletDir = 3;
    }

    fire() {
        if (this.timer % 30 === 0) {
            let nuBullet = new EnemyBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [this.bulletDir, 0]})
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

module.exports = EnemyFlanker