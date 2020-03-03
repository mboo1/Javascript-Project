const MovingObject = require('./moving_object');
const Enemy = require('./enemy');
const EnemyBullet = require('./enemy_bullet');
const Sprite = require('./sprite');

class EnemyControl extends Enemy {
    constructor(props) {
        super(props);
        this.value = 1500;
        this.hp = 10 + (this.game.round * 5);
        this.color = 'red';
        this.radius = 35;
        this.pos = [250, -50];
        this.vel = [0, 0.75];
        this.timer = 0;
        this.sprite = new Sprite('./gimg/enemybig.png', [0,0], [32,32], [75, 75], 1, [0, 1], 'horizontal');
    }

    fire() {
        if (this.timer % 100 === 0) {
            // Hardcode DIM X
            let gapMin = 430 * Math.random();
            let gapMax = gapMin + 60 + (Math.random() * 20);
            for (let x = 0; x < 500; x+=30) {
                if (x < gapMin || x > gapMax) {
                    let nuBullet = new EnemyBullet({pos: [x, 30], vel: [0, 1.5]})
                    this.game.enemies.push(nuBullet);
                }
            }
        }
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        if (this.pos[1] > 50) {
            this.vel = [0, 0]
        }
        this.timer += 1;
        this.fire();
    }

    draw(ctx) {
        this.sprite.render(ctx, this.pos[0]-this.radius-3, this.pos[1]-this.radius-5);
    }
}

module.exports = EnemyControl