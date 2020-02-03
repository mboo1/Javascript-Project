class Sprite {
    constructor(img, pos, size, scale, speed, frames, dir, once) {
        this.image = new Image();
        this.image.src = img;
        this.pos = pos;
        this.size = size;
        this.scale = scale;
        this.speed = speed;
        this.frames = frames;
        this.tick = 0;
        this.dir = dir;
        this.once = once || false;
        this.done = false;
    }

    updateSprite(dt) {
        let new_num = (dt * this.speed);
        this.tick = this.tick + new_num;
    }

    render(ctx, posX, posY) {
        let max = this.frames.length;
        let idx = Math.floor(this.tick);
        let frame = this.frames[idx % max];

        if (this.once === true && this.tick > max) {
            this.done = true;
        }

        let x = this.pos[0];
        let y = this.pos[1];

        if (this.dir === 'vertical') {
            y += frame * this.size[1];
        } else {
            x += frame * this.size[0];
        }


        ctx.drawImage(
            this.image,
            x, y,
            this.size[0], this.size[1],
            posX,
            posY,
            this.scale[0], this.scale[1])
    }
}

module.exports = Sprite;