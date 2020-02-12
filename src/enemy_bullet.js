const Enemy = require('./enemy');
const Sprite = require('./sprite')

class EnemyBullet extends Enemy {
    constructor(props) {
        super(props);
        this.color = 'orange';
        this.radius = 6;
        // this.vel = [0, 3.5];
        this.value = 0;
        this.sprite = new Sprite('./gimg/laserbolts.png', [5,5], [14,12], [35, 35], 2, [0, 1], 'horizontal');
    }

    draw(ctx) {
        // ctx.fillStyle = this.color;

        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        // );
        // ctx.fill();
        this.sprite.render(ctx, this.pos[0]-this.radius-4, this.pos[1]-this.radius-6);
    }
}

module.exports = EnemyBullet;