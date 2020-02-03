const EnemyBullet = require('./enemy_bullet');
const Sprite = require('./sprite');

class EnemyBigBullet extends EnemyBullet {
    constructor(props) {
        super(props)
        this.sprite = new Sprite('../img/laserbolts.png', [5,5], [14,12], [60, 60], 2, [0, 1], 'horizontal');
        this.radius = 15;
    }

    // draw(ctx) {
    //     ctx.fillStyle = this.color;

    //     ctx.beginPath();
    //     ctx.arc(
    //         this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
    //     );
    //     ctx.fill();
    //     this.sprite.render(ctx, this.pos[0]-this.radius, this.pos[1]-this.radius-4);
    // }
}

module.exports = EnemyBigBullet;