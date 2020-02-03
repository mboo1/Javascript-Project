const MovingObject = require('./moving_object');
const Sprite = require('./sprite');

class Explosion extends MovingObject {
    constructor(props) {
        super(props)
        this.vel = [0, 0];
        this.color = 'red';
        this.radius = 10;
        this.sprite = new Sprite('../img/explosion.png', [0,0], [16,16], [32, 32], 12, [0, 1, 2, 3, 4], 'horizontal', true);
    }

    draw(ctx) {
        // ctx.fillStyle = 'pink';

        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        // );
        // ctx.fill();
        this.sprite.render(ctx, this.pos[0]-this.radius, this.pos[1]-this.radius);
    }
}

module.exports = Explosion;