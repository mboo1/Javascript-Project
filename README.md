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
