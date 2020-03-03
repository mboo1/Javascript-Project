const MovingObject = require('./moving_object');
const Enemy = require('./enemy');
const EnemySniper = require('./enemy_sniper');
const Explosion = require('./explosion');
const Sprite = require('./sprite');
const EnemyBoss = require('./enemy_boss');
const EnemyBullet = require('./enemy_bullet');
const EnemyControl = require('./enemy_control');

class PlayerBullet extends MovingObject {
    constructor(props) {
        super(props);
        this.radius = 3;
        this.color = 'blue';
        this.vel = [0, -3.0];
        this.sprite = new Sprite('./gimg/laserbolts.png', [5,16], [14,12], [20, 20], 32, [0, 1], 'horizontal');
        this.explosionSound = document.createElement("audio");
        this.explosionSound.src = "./gimg/smallexplosion.wav";
        this.explosionSound.volume = 0.8;
    }

    collideWith(otherObject) {
        if (otherObject instanceof Enemy && !(otherObject instanceof EnemyBullet)) {
            otherObject.hp -= 1;
            this.game.remove(this);
            if (otherObject.hp < 1) {
                this.game.score += otherObject.value;
                this.game.remove(otherObject);
                if (!this.gameView.muted) {
                    this.explosionSound.load();
                    this.explosionSound.play();
                }
                let nuExplosion = new Explosion({pos: [this.pos[0], this.pos[1]], game: this.game})
                this.game.explosions.push(nuExplosion);
                if (otherObject instanceof EnemySniper) {
                    this.game.explosions.push(new Explosion({pos: [this.pos[0]-15, this.pos[1]], game: this.game}))
                    this.game.explosions.push(new Explosion({pos: [this.pos[0]+15, this.pos[1]-15], game: this.game}))
                }
                if (otherObject instanceof EnemyBoss) {
                    this.game.wave += 1;
                    // this.game.gameTime = 0;
                }
                if (otherObject instanceof EnemyControl) {
                    this.game.wave += 1;
                    this.game.gameTime = 0;
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