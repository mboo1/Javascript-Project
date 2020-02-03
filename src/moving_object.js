
class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true
        );
        ctx.fill();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    hasCollidedWith(otherObject) {
        let dist = this.getDistance(this.pos, otherObject.pos);
        if (dist < (this.radius + otherObject.radius)) {
            return true;
        } else {
            return false;
        }
    }

    collideWith(otherObject) {
        // console.log('collision detected')
    }

    getDistance(coords1, coords2) {
        let xdist = Math.abs(coords1[0] - coords2[0]);
        let ydist = Math.abs(coords1[1] - coords2[1]);
        xdist = Math.pow(xdist, 2);
        ydist = Math.pow(ydist, 2);
        return Math.sqrt(xdist + ydist);
    }

    // checkIfOutOfBounds
}

module.exports = MovingObject;