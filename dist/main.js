/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nclass Enemy extends MovingObject {\n    constructor(props) {\n        super(props);\n        this.hp = 1;\n    }\n\n}\n\nmodule.exports = Enemy;\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/enemy_big_bullet.js":
/*!*********************************!*\
  !*** ./src/enemy_big_bullet.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const EnemyBullet = __webpack_require__(/*! ./enemy_bullet */ \"./src/enemy_bullet.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\nclass EnemyBigBullet extends EnemyBullet {\n    constructor(props) {\n        super(props)\n        this.sprite = new Sprite('../img/laserbolts.png', [5,5], [14,12], [60, 60], 2, [0, 1], 'horizontal');\n        this.radius = 15;\n    }\n\n    // draw(ctx) {\n    //     ctx.fillStyle = this.color;\n\n    //     ctx.beginPath();\n    //     ctx.arc(\n    //         this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n    //     );\n    //     ctx.fill();\n    //     this.sprite.render(ctx, this.pos[0]-this.radius, this.pos[1]-this.radius-4);\n    // }\n}\n\nmodule.exports = EnemyBigBullet;\n\n//# sourceURL=webpack:///./src/enemy_big_bullet.js?");

/***/ }),

/***/ "./src/enemy_boss.js":
/*!***************************!*\
  !*** ./src/enemy_boss.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\nconst EnemyBullet = __webpack_require__(/*! ./enemy_bullet */ \"./src/enemy_bullet.js\");\n\nclass EnemyBoss extends Enemy {\n    constructor(props) {\n        super(props);\n        this.color = 'red';\n        this.radius = 64;\n        this.vel = [0, 0];\n        this.pos = [250, 250]\n        this.timer = 0;\n        this.okay = true;\n        this.sprite = new Sprite('../img/Ship6.png', [0,0], [156,156], [300, 300], 8, [0], 'horizontal');\n    }\n\n    fire() {\n        if (this.timer % 180 === 0 && this.okay) {\n            this.fireBulletHalo(100)\n            // this.okay = false;\n        }\n    }\n\n    fireBulletHalo(rounds) {\n        let roundsFired = 0;\n        let xSpeed = 2;\n        let ySpeed = 0;\n        let xFalling = true;\n        let yFalling = true;\n        let bulletTime = setInterval(() => {\n            let nuBullet = new EnemyBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [xSpeed, ySpeed]});\n            this.game.enemies.push(nuBullet);\n            roundsFired += 1\n            if (xFalling === true) {\n                xSpeed -= 0.3;\n            } else {\n                xSpeed += 0.3;\n            }\n            if (yFalling === true) {\n                ySpeed -= 0.3;\n            } else {\n                ySpeed += 0.3;\n            }\n            // (xFalling === true) ? xSpeed -= 0.1 : xSpeed += 0.1;\n            // (yFalling === true) ? ySpeed -= 0.1 : ySpeed += 0.1;\n            if (xSpeed <= -2) xFalling = false;\n            if (xSpeed >= 2) xFalling = true;\n            if (ySpeed <= -2) yFalling = false;\n            if (ySpeed >= 2) yFalling = true;\n            if (roundsFired === rounds) clearInterval(bulletTime)\n        }, 150);\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n        // DIM hardcode\n        if (this.pos[1] > 480) { \n            this.vel = [0,-1]\n        } \n        this.timer += 1;\n        if (this.timer % 180 === 0) {\n            // let newX = Math.random() - Math.random() *1.5;\n            // let newY = Math.random() - Math.random();\n            // this.vel = [newX, newY];\n        } if (this.timer > 180) {\n            if (this.pos[0] < 10) this.vel[0] = 0.75;\n            if (this.pos[0] > 490) this.vel[0] = -0.75;\n            if (this.pos[1] < 10) this.vel[1] = 0.75;\n            if (this.pos[1] > 250) this.vel[1] = -0.75;\n        }\n        this.fire();\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        );\n        // ctx.fill();\n        this.sprite.render(ctx, this.pos[0]-this.radius-100, this.pos[1]-this.radius-100);\n    }\n\n\n}\n\nmodule.exports = EnemyBoss;\n\n//# sourceURL=webpack:///./src/enemy_boss.js?");

/***/ }),

/***/ "./src/enemy_bullet.js":
/*!*****************************!*\
  !*** ./src/enemy_bullet.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\")\n\nclass EnemyBullet extends Enemy {\n    constructor(props) {\n        super(props);\n        this.color = 'orange';\n        this.radius = 6;\n        // this.vel = [0, 3.5];\n        this.sprite = new Sprite('../img/laserbolts.png', [5,5], [14,12], [35, 35], 2, [0, 1], 'horizontal');\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        // );\n        // ctx.fill();\n        this.sprite.render(ctx, this.pos[0]-this.radius-4, this.pos[1]-this.radius-6);\n    }\n}\n\nmodule.exports = EnemyBullet;\n\n//# sourceURL=webpack:///./src/enemy_bullet.js?");

/***/ }),

/***/ "./src/enemy_flanker.js":
/*!******************************!*\
  !*** ./src/enemy_flanker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst EnemyBullet = __webpack_require__(/*! ./enemy_bullet */ \"./src/enemy_bullet.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\nclass EnemyFlanker extends Enemy {\n    constructor(props) {\n        super(props);\n        this.color = 'white';\n        this.radius = 12;\n        this.vel = [0, 1];\n        this.timer = 0;\n        this.sprite = new Sprite('../img/enemysmall.png', [0,16], [16,16], [22, 22], 0.5, [0, 1], 'horizontal');\n        this.pos[0] > 50 ? this.bulletDir = -3 : this.bulletDir = 3;\n    }\n\n    fire() {\n        if (this.timer % 30 === 0) {\n            let nuBullet = new EnemyBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [this.bulletDir, 0]})\n            this.game.enemies.push(nuBullet);\n        }\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n        // DIM hardcode\n        if (this.pos[1] > 480) { \n            this.vel = [0,-1]\n        } \n        this.timer += 1;\n        this.fire();\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        // );\n        // ctx.fill();\n        this.sprite.render(ctx, this.pos[0]-this.radius+2, this.pos[1]-this.radius+2);\n    }\n}\n\nmodule.exports = EnemyFlanker\n\n//# sourceURL=webpack:///./src/enemy_flanker.js?");

/***/ }),

/***/ "./src/enemy_one.js":
/*!**************************!*\
  !*** ./src/enemy_one.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst EnemyBullet = __webpack_require__(/*! ./enemy_bullet */ \"./src/enemy_bullet.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\nclass EnemyOne extends Enemy {\n    constructor(props) {\n        super(props);\n        this.color = 'white';\n        this.radius = 12;\n        this.vel = [3, 0.5];\n        this.timer = 0;\n        this.sprite = new Sprite('../img/enemysmall.png', [0,0], [16,16], [22, 22], 0.5, [0, 1], 'horizontal');\n    }\n\n    fire() {\n        if (this.timer % 120 === 0) {\n            let nuBullet = new EnemyBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [0, 3.5]})\n            this.game.enemies.push(nuBullet);\n        }\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n        if (this.pos[0] < 10) {\n            this.vel = [3,0.5]\n        } else if (this.pos[0] > 490) {\n            this.vel = [-3, 0.5]\n        }\n        this.timer += 1;\n        this.fire();\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        // );\n        // ctx.fill();\n        this.sprite.render(ctx, this.pos[0]-this.radius+2, this.pos[1]-this.radius+2);\n    }\n}\n\nmodule.exports = EnemyOne\n\n//# sourceURL=webpack:///./src/enemy_one.js?");

/***/ }),

/***/ "./src/enemy_sniper.js":
/*!*****************************!*\
  !*** ./src/enemy_sniper.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst EnemyBullet = __webpack_require__(/*! ./enemy_bullet */ \"./src/enemy_bullet.js\");\nconst EnemyBigBullet = __webpack_require__(/*! ./enemy_big_bullet */ \"./src/enemy_big_bullet.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\nclass EnemySniper extends Enemy {\n    constructor(props) {\n        super(props);\n        this.color = 'red';\n        this.radius = 30;\n        this.vel = [2, 0.5];\n        this.timer = 0;\n        this.hp = 5;\n        this.sprite = new Sprite('../img/enemysniper.png', [0,0], [32,16], [96, 50], 12, [0, 1], 'horizontal');\n    }\n\n    fire() {\n        if (this.timer % 120 === 0) {\n            let nuBullet = new EnemyBigBullet({pos: [this.pos[0], this.pos[1] + 5], vel: [0, 5]})\n            this.game.enemies.push(nuBullet);\n        }\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n        // DIM hardcode\n        if (this.pos[1] > 480) { \n            this.vel = [0,-1]\n        } \n        this.timer += 1;\n        if (this.timer % 180 === 0) {\n            let newX = Math.random() - Math.random();\n            let newY = Math.random() - Math.random();\n            this.vel = [newX, newY];\n        } if (this.timer > 180) {\n            if (this.pos[0] < 10) this.vel[0] = 0.25;\n            if (this.pos[0] > 490) this.vel[0] = -0.25;\n            if (this.pos[1] < 10) this.vel[1] = 0.25;\n            if (this.pos[1] > 490) this.vel[1] = -0.25;\n        }\n        this.fire();\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        // );\n        // ctx.fill();\n        this.sprite.render(ctx, this.pos[0]-this.radius-20, this.pos[1]-this.radius);\n    }\n}\n\nmodule.exports = EnemySniper\n\n//# sourceURL=webpack:///./src/enemy_sniper.js?");

/***/ }),

/***/ "./src/explosion.js":
/*!**************************!*\
  !*** ./src/explosion.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\nclass Explosion extends MovingObject {\n    constructor(props) {\n        super(props)\n        this.vel = [0, 0];\n        this.color = 'red';\n        this.radius = 10;\n        this.sprite = new Sprite('../img/explosion.png', [0,0], [16,16], [32, 32], 12, [0, 1, 2, 3, 4], 'horizontal', true);\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = 'pink';\n\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        // );\n        // ctx.fill();\n        this.sprite.render(ctx, this.pos[0]-this.radius, this.pos[1]-this.radius);\n    }\n}\n\nmodule.exports = Explosion;\n\n//# sourceURL=webpack:///./src/explosion.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DIM_X = 500;\nconst DIM_Y = 500;\n\nconst SCROLL_SPEED = 10;\nlet imgPos = 0;\n\nconst EnemyOne = __webpack_require__(/*! ./enemy_one */ \"./src/enemy_one.js\");\nconst EnemyFlanker = __webpack_require__(/*! ./enemy_flanker */ \"./src/enemy_flanker.js\");\nconst EnemySniper = __webpack_require__(/*! ./enemy_sniper */ \"./src/enemy_sniper.js\");\nconst EnemyBoss = __webpack_require__(/*! ./enemy_boss */ \"./src/enemy_boss.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst PlayerBullet = __webpack_require__(/*! ./player_bullet */ \"./src/player_bullet.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst EnemyBullet = __webpack_require__(/*! ./enemy_bullet */ \"./src/enemy_bullet.js\");\nconst Explosion = __webpack_require__(/*! ./explosion */ \"./src/explosion.js\");\n\nclass Game {\n    constructor(options) {\n        this.gameView = options.gameView;\n        this.enemies = [];\n        this.ships = [];\n        this.playerBullets = [];\n        this.explosions = [];\n        // this.addEnemies();\n        this.addShip();\n        this.background = new Image();\n        this.background.src = '../img/background.png';\n        this.gameTime = 0;\n        this.wave = 0;\n    }\n\n    addEnemyOnes(squads) {\n        let squadsAdded = 0;\n        let addSquads = setInterval(() => {\n            let coord = 30;\n            for (let i = 0; i < 4; i ++) {\n                let newEn = new EnemyOne({pos: [coord, coord], game: this});\n                this.enemies.push(newEn);\n                coord += 20;\n            }\n            squadsAdded += 1;\n            if (squadsAdded === squads) clearInterval(addSquads);\n        }, 3000);\n    }\n\n    addEnemySnipers(units) {\n        let unitsAdded = 0;\n        let addUnits = setInterval(() => {\n            let coord = 0;\n            let newEn = new EnemySniper({pos: [coord, coord], game: this});\n            this.enemies.push(newEn);\n            unitsAdded += 1;\n            if (unitsAdded === units) clearInterval(addUnits);\n        }, 1000)\n    }\n\n    addEnemyFlankers(squads) {\n        let squadsAdded = 0;\n        let addSquads = setInterval(() => {\n            let coordX = 30;\n            let coordY = 0;\n            for (let i = 0; i < 4; i++) {\n                let newEn = new EnemyFlanker({ pos: [coordX, coordY], game: this });\n                this.enemies.push(newEn);\n                (coordX === 30) ? coordX = DIM_Y -30 : coordX = 30;\n                coordY -= 25; \n            }\n            squadsAdded += 1;\n            if (squadsAdded === squads) clearInterval(addSquads);\n        }, 2000)\n    }\n\n    addEnemyBoss(squads) {\n        for (let i =0; i < squads; i++) {\n            let newEn = new EnemyBoss({pos: [0,0], game: this});\n            this.enemies.push(newEn);\n        }\n    }\n\n    addEnemies() {\n        if (this.gameTime > 3 && this.wave === 0) {\n            this.wave += 1;\n            // this.addEnemyBoss(1);\n            this.addEnemyOnes(4)\n        } \n        if (this.gameTime > 15 && this.wave === 1) {\n            this.wave += 1;\n            this.addEnemyFlankers(4)\n        } if (this.gameTime > 32 && this.wave === 2) {\n            this.wave += 1;\n            this.addEnemySnipers(4)\n        } if (this.gameTime > 48 && this.wave === 3) {\n            this.wave += 1;\n            this.addEnemyBoss(1);\n        }\n\n        this.gameTime += this.gameView.dt\n    }\n\n    checkOutOfBounds() {\n        this.allObjects().forEach(obj => {\n            if (obj.pos[0] < -250 || obj.pos[0] > DIM_X + 250 || obj.pos[1] < -150 || obj.pos[1] > DIM_Y + 250) {\n                if (!(obj instanceof Ship)) this.remove(obj)\n            }\n            if (obj instanceof Ship) {\n                if (!this.gameView.gameOver) this.keepPlayerInBounds();\n             }\n        })\n    }\n\n    keepPlayerInBounds() {\n        let gameShip = this.ships[0];\n        if (gameShip.pos[0] < 10) {\n            gameShip.pos[0] = 10;\n        } else if (gameShip.pos[0] > DIM_X -20 ) {\n            gameShip.pos[0] = DIM_X - 20;\n        }\n        if (gameShip.pos[1] < 10) {\n            gameShip.pos[1] = 10;\n        } else if (gameShip.pos[1] > DIM_Y -20) {\n            gameShip.pos[1] = DIM_Y - 20;\n        }\n    }\n\n    checkCollisions() {\n        this.allObjects().forEach(obj1 => {\n            this.allObjects().forEach(obj2 => {\n                if (obj1 !== obj2 && obj1.hasCollidedWith(obj2)) {\n                    obj1.collideWith(obj2)\n                }\n            })\n        })\n    }\n\n    remove(obj) {\n        if (obj instanceof Enemy) {\n            this.enemies.splice(this.enemies.indexOf(obj), 1);\n        } else if (obj instanceof Ship) {\n            this.ships.splice(this.ships.indexOf(obj), 1);\n        } else if (obj instanceof PlayerBullet) {\n            // console.log(obj)\n            this.playerBullets.splice(this.playerBullets.indexOf(obj), 1);\n        } else if (obj instanceof Explosion) {\n            this.explosions.splice(this.explosions.indexOf(obj), 1);\n        } else {\n            console.log(\"I dont know what that is\");\n        }\n    }\n\n    addShip() {\n        let newShip = new Ship({pos: [DIM_X /2, DIM_Y/2], game: this, gameView: this.gameView})\n        this.ships.push(newShip)\n    }\n\n    allObjects() {\n        let allObj = this.enemies.concat(this.ships);\n        allObj = allObj.concat(this.playerBullets);\n        allObj = allObj.concat(this.explosions);\n        return allObj;\n    }\n\n    drawBackground(ctx) {\n        ctx.drawImage(\n            this.background,\n            0, imgPos, DIM_X, DIM_Y);\n        ctx.drawImage(\n            this.background,\n            0, imgPos - DIM_Y, DIM_X, DIM_Y\n        );\n        imgPos += 0.5;\n        if (imgPos > DIM_Y) imgPos = 0;\n    }\n    \n\n    draw(ctx) {\n        ctx.clearRect(0,0, DIM_X, DIM_Y);\n        this.drawBackground(ctx);\n        this.allObjects().forEach(obj => {\n            obj.draw(ctx)\n        })\n    }\n\n    moveObjects() {\n        this.allObjects().forEach(obj => {\n            obj.move();\n            // if (obj instanceof EnemyOne || obj instanceof Ship || obj instanceof EnemyBullet || obj instanceof Explosion) {\n                obj.sprite.updateSprite(this.gameView.dt);\n                if (obj.sprite.done === true) this.remove(obj);\n            // }\n        })\n        this.checkCollisions();\n        this.checkOutOfBounds();\n        // this.ships[0].sprite.updateSprite(this.gameView.dt);\n    }\n\n    \n}\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\nclass GameView {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.dt = 0;\n        this.lastTime = 1138;\n        this.game = new Game({gameView: this});\n        this.runGame = this.runGame.bind(this);\n        this.gameOver = false;\n        this.reset = this.reset.bind(this);\n        this.firstGame = true;\n        this.animationRef = 0;\n    }\n\n    reset() {\n        document.getElementById('play-again').removeEventListener('click', () => {\n            this.reset();\n        });\n        this.game.enemies = [];\n        this.game.playerBullets = [];\n        this.game.gameTime = 0;\n        this.game.wave = 0;\n        document.getElementById('game-over').style.display = 'none';\n        document.getElementById('game-over-overlay').style.display = 'none';\n        this.gameOver = false;\n        this.firstGame = false;\n        this.game.ships[0].pos = [250, 250];\n        // this.start();\n    }\n\n    runGame(timestamp) {\n        let now = Date.now();\n        if (this.lastTime === 1138) this.lastTime = Date.now() - 0.25;\n        this.dt = (now - this.lastTime) / 1000.0;\n        this.game.moveObjects();\n        this.game.draw(this.ctx);\n        this.game.addEnemies();\n        this.lastTime = now;\n        if (!this.gameOver) {\n            this.animationRef = requestAnimationFrame(this.runGame);\n        } else {\n            // cancelAnimationFrame(this.animationRef);\n            this.animationRef = requestAnimationFrame(this.runGame);\n            this.animationRef = 0;\n            document.getElementById('game-over').style.display = 'block';\n            document.getElementById('game-over-overlay').style.display = 'block';\n            document.getElementById('play-again').addEventListener('click', () => {\n                this.reset();\n            });\n        }\n    }\n\n    start() {\n        document.getElementById('game-over').style.display = 'none';\n        document.getElementById('game-over-overlay').style.display = 'none';\n        if (this.firstGame) this.animationRef = requestAnimationFrame(this.runGame);\n    //     if (this.firstGame) {setInterval(() => {\n    //         this.game.addEnemies();\n    //     }, 3000)\n    // }\n    }\n\n\n\n\n}\n\nmodule.exports = GameView\n\n\n// this.fpsInterval = 50;\n// this.then = Date.now();\n// this.startTime = this.then;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('webpack is working!');\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst EnemyOne = __webpack_require__(/*! ./enemy_one */ \"./src/enemy_one.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// const resLoad = require('./resources');\nconst Resourcer = __webpack_require__(/*! ./resources */ \"./src/resources.js\");\n\nwindow.EnemyOne = EnemyOne;\nconst LEFT = 37;\nconst UP = 38;\nconst RIGHT = 39;\nconst DOWN = 40;\n\nclass keyStatus {\n    constructor() {\n        this.pressed = {}\n    }\n    isDown(keyCode) {\n        return this.pressed[keyCode]\n    };\n\n    onKeydown(event) {\n        this.pressed[event.keyCode] = true;\n        // console.log(this.pressed)\n    };\n\n    onKeyup(event) {\n        delete this.pressed[event.keyCode];\n    }\n}\n\n// function begin() { document.addEventListener('DOMContentLoaded', () => {\n//     console.log('rem');\n//     let canvas = document.getElementById('game-canvas');\n//     let ctx = canvas.getContext('2d');\n//     ctx.imageSmoothingEnabled = false;\n//     let gameView = new GameView(ctx);\n//     gameView.start();\n//     let gameShip = gameView.game.ships[0]\n//     let gameStatus = new keyStatus;\n//     document.addEventListener('keyup', function(event) {\n//         gameStatus.onKeyup(event);\n//         gameShip.takeMove(gameStatus)\n//         }, false);\n//     document.addEventListener('keydown', function(event) {\n//         gameStatus.onKeydown(event);\n//         gameShip.takeMove(gameStatus);\n//     }, false)\n\n\n// })}\n\nfunction begin() { \n    console.log('rem');\n    let canvas = document.getElementById('game-canvas');\n    let ctx = canvas.getContext('2d');\n    ctx.imageSmoothingEnabled = false;\n    let gameView = new GameView(ctx);\n    gameView.start();\n    let gameShip = gameView.game.ships[0]\n    let gameStatus = new keyStatus;\n    document.addEventListener('keyup', function(event) {\n        gameStatus.onKeyup(event);\n        gameShip.takeMove(gameStatus)\n        }, false);\n    document.addEventListener('keydown', function(event) {\n        gameStatus.onKeydown(event);\n        gameShip.takeMove(gameStatus);\n    }, false)\n\n}\n\nbegin = begin.bind(this);\n\n// setTimeout(() => {\n//     begin();\n// }, 1000)\n// begin();\n\n// setTimeout(() => {\n//     console.log('timer')\n// }, 1000)\n\nsetTimeout(() => {\n    console.log('othert')\n    begin();\n}, 10000)\n\nlet loader = new Resourcer();\nloader.testo();\n\nloader.load([\n    '../img/background.png',\n    '../img/enemybig.png',\n    '../img/enemysmall.png',\n    '../img/enemysniper.png',\n    '../img/explosion.png',\n    '../img/laserbolts.png',\n    '../img/ship.png',\n    '../img/Ship6.png',\n]);\nconsole.log(loader.resourceCache);\nconsole.log(loader.readyCallbacks);\n// loader.onReady(begin);\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass MovingObject {\n    constructor(options) {\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n        this.game = options.game;\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        );\n        ctx.fill();\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n\n    hasCollidedWith(otherObject) {\n        let dist = this.getDistance(this.pos, otherObject.pos);\n        if (dist < (this.radius + otherObject.radius)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    collideWith(otherObject) {\n        // console.log('collision detected')\n    }\n\n    getDistance(coords1, coords2) {\n        let xdist = Math.abs(coords1[0] - coords2[0]);\n        let ydist = Math.abs(coords1[1] - coords2[1]);\n        xdist = Math.pow(xdist, 2);\n        ydist = Math.pow(ydist, 2);\n        return Math.sqrt(xdist + ydist);\n    }\n\n    // checkIfOutOfBounds\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/player_bullet.js":
/*!******************************!*\
  !*** ./src/player_bullet.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst EnemySniper = __webpack_require__(/*! ./enemy_sniper */ \"./src/enemy_sniper.js\");\nconst Explosion = __webpack_require__(/*! ./explosion */ \"./src/explosion.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\nclass PlayerBullet extends MovingObject {\n    constructor(props) {\n        super(props);\n        this.radius = 3;\n        this.color = 'blue';\n        this.vel = [0, -3.0];\n        this.sprite = new Sprite('../img/laserbolts.png', [5,16], [14,12], [20, 20], 32, [0, 1], 'horizontal');\n    }\n\n    collideWith(otherObject) {\n        if (otherObject instanceof Enemy) {\n            otherObject.hp -= 1;\n            this.game.remove(this);\n            if (otherObject.hp < 1) {\n                this.game.remove(otherObject);\n                let nuExplosion = new Explosion({pos: [this.pos[0], this.pos[1]], game: this.game})\n                this.game.explosions.push(nuExplosion);\n                if (otherObject instanceof EnemySniper) {\n                    this.game.explosions.push(new Explosion({pos: [this.pos[0]-15, this.pos[1]], game: this.game}))\n                    this.game.explosions.push(new Explosion({pos: [this.pos[0]+15, this.pos[1]-15], game: this.game}))\n                }\n            }\n        }\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        );\n        ctx.fill();\n        this.sprite.render(ctx, this.pos[0]-this.radius-3, this.pos[1]-this.radius-5);\n    }\n}\n\nmodule.exports = PlayerBullet;\n\n//# sourceURL=webpack:///./src/player_bullet.js?");

/***/ }),

/***/ "./src/resources.js":
/*!**************************!*\
  !*** ./src/resources.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Resourcer {\n    constructor(options) {\n        // super(props)\n        this.resourceCache = {};\n        this.loading = [];\n        this.readyCallbacks = [];\n        this.xload = this.xload.bind(this);\n    }\n\n    xload(url) {\n        if(this.resourceCache[url]) {\n            return this.resourceCache[url];\n        }\n        else {\n            var img = new Image();\n            img.onload = () => {\n                this.resourceCache[url] = img;\n                if(this.isReady()) {\n                    this.readyCallbacks.forEach((func) => {\n                        console.log(func)\n                        console.log('grim')\n                        func(); \n                    });\n                }\n            };\n            this.resourceCache[url] = false;\n            img.src = url;\n        }\n    }\n\n    testo() {\n        this.testo2();\n    }\n\n    testo2() {\n        console.log('gret')\n    }\n\n    load(urlOrArr) {\n        if(urlOrArr instanceof Array) {\n            urlOrArr.forEach((url) => {\n                this.xload(url);\n            });\n        }\n        else {\n            this.xload(urlOrArr);\n        }\n    }\n\n    get(url) {\n        return this.resourceCache[url];\n    }\n\n    isReady() {\n        var ready = true;\n        for(var k in this.resourceCache) {\n            if(this.resourceCache.hasOwnProperty(k) &&\n               !this.resourceCache[k]) {\n                ready = false;\n            }\n        }\n        return ready;\n    }\n\n    onReady(func) {\n        this.readyCallbacks.push(func);\n    }\n}\n\nmodule.exports = Resourcer\n\n\n// (function() {\n//     var resourceCache = {};\n//     var loading = [];\n//     var readyCallbacks = [];\n\n//     // Load an image url or an array of image urls\n//     function load(urlOrArr) {\n//         if(urlOrArr instanceof Array) {\n//             urlOrArr.forEach(function(url) {\n//                 _load(url);\n//             });\n//         }\n//         else {\n//             _load(urlOrArr);\n//         }\n//     }\n\n//     function _load(url) {\n//         if(resourceCache[url]) {\n//             return resourceCache[url];\n//         }\n//         else {\n//             var img = new Image();\n//             img.onload = function() {\n//                 resourceCache[url] = img;\n                \n//                 if(isReady()) {\n//                     readyCallbacks.forEach(function(func) { func(); });\n//                 }\n//             };\n//             resourceCache[url] = false;\n//             img.src = url;\n//         }\n//     }\n\n//     function get(url) {\n//         return resourceCache[url];\n//     }\n\n//     function isReady() {\n//         var ready = true;\n//         for(var k in resourceCache) {\n//             if(resourceCache.hasOwnProperty(k) &&\n//                !resourceCache[k]) {\n//                 ready = false;\n//             }\n//         }\n//         return ready;\n//     }\n\n//     function onReady(func) {\n//         readyCallbacks.push(func);\n//     }\n\n//     window.resources = { \n//         load: load,\n//         get: get,\n//         onReady: onReady,\n//         isReady: isReady\n//     };\n// })();\n\n// module.exports = load;\n\n\n//# sourceURL=webpack:///./src/resources.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst PlayerBullet = __webpack_require__(/*! ./player_bullet */ \"./src/player_bullet.js\");\nconst Enemy = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nconst Sprite = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n// import shipSprite from './../img/ship.png';\n\nconst LEFT = 37;\nconst UP = 38;\nconst RIGHT = 39;\nconst DOWN = 40;\nconst BULLET_COUNT = 5;\n\nclass Ship extends MovingObject {\n    constructor(props) {\n        super(props);\n        this.color = 'green';\n        this.radius = 20;\n        this.vel = [0, 0];\n        this.speed = 2;\n        this.gameView = props.gameView;\n        this.prevFire = 0;\n        this.fireEffect = document.createElement(\"audio\");\n        // this.fireEffect.src = \"../img/Gun12.wav\";\n        // this.sprite = new Sprite('../img/ship.png', [0,0], [15,24], [50, 50], 16, [0, 1, 2, 3, 4, 3, 2, 1], 'horizontal');\n        this.sprite = new Sprite('../img/ship.png', [32,0], [17,24], [50, 50], 16, [0, 1], 'vertical');\n        this.sprites = {\n            bankLeft: new Sprite('../img/ship.png', [0,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),\n            static: new Sprite('../img/ship.png', [32,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),\n            bankRight: new Sprite('../img/ship.png', [64,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),\n            lightRight: new Sprite('../img/ship.png', [48,0], [17,24], [50, 50], 16, [0, 1], 'vertical'),\n            lightLeft: new Sprite('../img/ship.png', [16,0], [16,24], [50, 50], 16, [0, 1], 'vertical')\n        }\n    }\n\n    takeMove(keyStatus) {\n\n        if (!this.gameView.gameOver) {\n            (keyStatus.isDown(LEFT)) ? this.vel[0] = -this.speed : this.vel[0] = 0;\n            if (keyStatus.isDown(RIGHT)) this.vel[0] = this.speed;\n            (keyStatus.isDown(UP)) ? this.vel[1] = -this.speed : this.vel[1] = 0;\n            if (keyStatus.isDown(DOWN)) this.vel[1] = this.speed;\n            if (keyStatus.isDown(32)) this.fireBullet();\n        }\n\n    }\n\n    fireBullet() {\n        if (Date.now() - this.prevFire > 120) {\n            let newBullet = new PlayerBullet({pos: [this.pos[0], this.pos[1]-13], game: this.game})\n            if (this.game.playerBullets.length <= BULLET_COUNT) this.game.playerBullets.push(newBullet);\n            this.prevFire = Date.now()\n            // this.fireEffect.play();\n            console.log('hello')\n        }\n    }\n\n    collideWith(otherObject) {\n        if (otherObject instanceof Enemy) {\n            // this.gameView.gameOver = true;\n            // this.pos = [-40, -40];\n            // this.vel[0] = 0;\n            // this.vel[1] = 0;\n        }\n    }\n\n    draw(ctx) {\n        // ctx.fillStyle = 'pink';\n\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true\n        // );\n        // ctx.fill();\n        if (this.vel[0] < 0 && this.vel[1] !== 0) {\n            this.sprite = this.sprites.lightLeft;\n        } else if (this.vel[0] > 0 && this.vel[1] !== 0) {\n            this.sprite = this.sprites.lightRight;\n        } else if (this.vel[0] > 0) {\n            this.sprite = this.sprites.bankRight;\n        } else if (this.vel[0] < 0) {\n            this.sprite = this.sprites.bankLeft\n        } else {\n            this.sprite = this.sprites.static;\n        }\n        this.sprite.render(ctx, this.pos[0]-this.radius-3, this.pos[1]-this.radius);\n    }\n\n}\n\nmodule.exports = Ship;\n\n// moveLeft() {\n//     // this.pos[0] -= this.speed;\n//     this.vel[0] = -1\n// }\n\n// moveRight() {\n//     // this.pos[0] += this.speed;\n//     this.vel = [1, 0]\n//     console.log(this.vel)\n// }\n\n// moveUp() {\n//     // this.pos[1] -= this.speed;\n//     this.vel[1] = -1\n// }\n\n// moveDown() {\n//     // this.pos[1] += this.speed;\n//     this.vel[1] = 1\n// }\n\n        // switch (dir) {\n        //     case 'left':\n        //         this.pos[0] -= this.speed\n        //         break\n        //     case 'right':\n        //         this.pos[0] += this.speed\n        //         break\n        //     case 'up':\n        //         this.pos[1] -= this.speed\n        //         break\n        //     case 'down':\n        //         this.pos[1] += this.speed\n        //         break\n        //     default:\n        //         console.log('what')\n        // }\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Sprite {\n    constructor(img, pos, size, scale, speed, frames, dir, once) {\n        this.image = new Image();\n        this.image.src = img;\n        this.pos = pos;\n        this.size = size;\n        this.scale = scale;\n        this.speed = speed;\n        this.frames = frames;\n        this.tick = 0;\n        this.dir = dir;\n        this.once = once || false;\n        this.done = false;\n    }\n\n    updateSprite(dt) {\n        let new_num = (dt * this.speed);\n        this.tick = this.tick + new_num;\n    }\n\n    render(ctx, posX, posY) {\n        let max = this.frames.length;\n        let idx = Math.floor(this.tick);\n        let frame = this.frames[idx % max];\n\n        if (this.once === true && this.tick > max) {\n            this.done = true;\n        }\n\n        let x = this.pos[0];\n        let y = this.pos[1];\n\n        if (this.dir === 'vertical') {\n            y += frame * this.size[1];\n        } else {\n            x += frame * this.size[0];\n        }\n\n\n        ctx.drawImage(\n            this.image,\n            x, y,\n            this.size[0], this.size[1],\n            posX,\n            posY,\n            this.scale[0], this.scale[1])\n    }\n}\n\nmodule.exports = Sprite;\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ })

/******/ });