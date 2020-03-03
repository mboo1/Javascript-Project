# JavaRaptor

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

JavaRaptor is a top-down 2D shooter inspired by classic games like Apogee's **Raptor: Call of the Shadows** and **Ikaruga**.

## Instructions

Use the **arrow** keys to manuever the ship, and **space** to fire.  Your goal is to survive as long as possible and shoot down enemy craft to achieve the highest score.  The number and power of the enemies you face will ramp up over time!

## Technologies

- Javascript
- HTML5 Canvas
- CSS

## Features and Implementation

All features in this game were implemented using native JavaScript DOM manipulation JS Canvas, and CSS.

### Scrolling Background

The scrolling background effect is achieved by drawing the background twice, with the second positioned a screen length below the first.  Both images are incremented upward every time requestAnimationFrame is called.

```javascript
    drawBackground(ctx) {
        ctx.drawImage(
            this.background,
            0, imgPos, DIM_X, DIM_Y);
        ctx.drawImage(
            this.background,
            0, imgPos - DIM_Y, DIM_X, DIM_Y
        );
        imgPos += 0.5;
        if (imgPos > DIM_Y) imgPos = 0;
    }
 ```
 
 ### Enemy Behavior
 
 Different enemy types implement different movement and attack patterns.  For example, the Sniper selects a new movement vector every few seconds (and also moves quickly away from the edge of the screen if it drifts too far).
 
 ```javascript
         if (this.timer % 180 === 0) {
            let newX = Math.random() - Math.random();
            let newY = Math.random() - Math.random();
            this.vel = [newX, newY];
        } if (this.timer > 180) {
            if (this.pos[0] < 10) this.vel[0] = 0.25;
            if (this.pos[0] > 490) this.vel[0] = -0.25;
            if (this.pos[1] < 10) this.vel[1] = 0.25;
            if (this.pos[1] > 490) this.vel[1] = -0.25;
        }
 ```
 
The enemy boss's bullet spirals are created by incrementing and decrementing x and y-velocities to cover a 360° spread.

```javascript
            if (xFalling === true) {
                xSpeed -= 0.3;
            } else {
                xSpeed += 0.3;
            }
            if (yFalling === true) {
                ySpeed -= 0.3;
            } else {
                ySpeed += 0.3;
            }
            // (xFalling === true) ? xSpeed -= 0.1 : xSpeed += 0.1;
            // (yFalling === true) ? ySpeed -= 0.1 : ySpeed += 0.1;
            if (xSpeed <= -2) xFalling = false;
            if (xSpeed >= 2) xFalling = true;
            if (ySpeed <= -2) yFalling = false;
            if (ySpeed >= 2) yFalling = true;
```

