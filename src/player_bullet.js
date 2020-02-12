const MovingObject = require('./moving_object');
const Enemy = require('./enemy');
const EnemySniper = require('./enemy_sniper');
const Explosion = require('./explosion');
const Sprite = require('./sprite');

class PlayerBullet extends MovingObject {
    constructor(props) {
        super(props);
        this.radius = 3;
        this.color = 'blue';
        this.vel = [0, -3.0];
        this.sprite = new Sprite('./gimg/laserbolts.png', [5,16], [14,12], [20, 20], 32, [0, 1], 'horizontal');
    }

    collideWith(otherObject) {
        if (otherObject instanceof Enemy) {
            otherObject.hp -= 1;
            this.game.remove(this);
            if (otherObject.hp < 1) {
                this.game.score += otherObject.value;
                this.game.remove(otherObject);
                let nuExplosion = new Explosion({pos: [this.pos[0], this.pos[1]], game: this.game})
                this.game.explosions.push(nuExplosion);
                if (otherObject instanceof EnemySniper) {
                    this.game.explosions.push(new Explosion({pos: [this.pos[0]-15, this.pos[1]], game: this.game}))
                    this.game.explosions.push(new Explosion({pos: [this.pos[0]+15, this.pos[1]-15], game: this.game}))
                }
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        );
        ctx.fill();
        this.sprite.render(ctx, this.pos[0]-this.radius-3, this.pos[1]-this.radius-5);
    }
}

module.exports = PlayerBullet;