const MovingObject = require('./moving_object');

class Enemy extends MovingObject {
    constructor(props) {
        super(props);
        this.hp = 1;
    }

}

module.exports = Enemy;