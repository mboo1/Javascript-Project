<!-- <head>
    <script src="dist/main.js"></script>
    <script type="text/javascript" src="src/resources.js"></script>
    <link rel="stylesheet" href="dist/index.css">
</head>

<body>
    <div id="game-over-overlay"></div>
    <canvas id="game-canvas" width="500" height="500"></canvas>
    <div id="game-over">
      <h1>GAME OVER</h1>
      <button id="play-again">Play Again</button>
    </div>
</body> -->

<head>
    <script src="dist/main.js"></script>
    <script type="text/javascript" src="src/resources.js"></script>
    <link href="https://fonts.googleapis.com/css?family=VT323&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d1f67cf0b7.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/b3bfcf250f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="dist/index.css">
</head>

<body>
    <div class="game-page">
      <!-- <div id="game-over-overlay"></div> -->
      <div class="title-row">
        <nav class="name">
          Michael Booey
        </nav>
        <div class="game-title">
          JS Raptor
        </div>
        <nav class="links-nav">
          <a href="https://github.com/mboo1" target="_blank"><img src="https://i.imgur.com/E5f1im3.png" alt="GitHub" height="25px" width="25px"></a>
          <a href="https://www.linkedin.com/in/michael-booe-42448313/" target="_blank">
            <img src="https://i.imgur.com/WlnRO2k.png" alt="Linkedin" height="25px" width="25px">
          </a>
        </nav>
      </div>
      <div>
        <div id="mute-button">
          <img id="mute-icon" src="https://i.imgur.com/jcHdPKP.png" alt="audio" height="50px" width="50px">
          <img hidden id="muted-icon" src="https://i.imgur.com/lp5Mqi0.png" alt="audio" height="50px" width="29.5px">
        </div>
      </div>
      <div class="game-row">
        <div class="instructions">
          <div class="instructions-title">How To Play</div>
          <div class="instruction-row">
            <img src="https://i.imgur.com/aLn23Up.png" alt="keyboard" height="100px" width="150px">
            <p>Use arrow keys to maneuver your ship</p>
          </div>
          <div class="instruction-row">
            <img src="https://i.imgur.com/pM6v5Zk.png" alt="keyboard" height="75px" width="150px">
            <p>Press spacebar to fire lasers</p>
          </div>
        </div>
        <div class="canvas-parent">
          <div class="start-container">
            <div id="game-start"></div>
            <h1 id="launch-message">Enter your initials and press `enter` to launch!</h1>
            <input id="name-input" type="text" maxlength="4" placeholder="">
          </div>
          <div id="game-over">
            <div class="game-over-message">GAME OVER</div>
            <div class="game-over-message">Press 'enter' to try again!</div>
          </div>
          <canvas id="game-canvas" width="500" height="500">
        </div>
        </canvas>
        <div id="scores">
          <div id="scores-title">High Scores</div>
          <ol id="scores-list">
            <li>MAB: 10000</li>
            <li>MAB: 5000</li>
            <li>MAB: 2500</li>
            <li>MAB: 1000</li>
            <li>MAB: 0</li>
          </ol>
        </div>
      </div>
    </div>
</body>