const rows = 3;
const columns = 3;

let currTile;

let board = [];

let lightsOn = 'http://127.0.0.1:5500/On.png';
let lightsOff = 'http://127.0.0.1:5500/Off.png';

let lights = ['On', 'Off'];

function randomLights() {
  return lights[Math.floor(Math.random() * lights.length)]; //0 - 5.99
}

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      //<img id="0-0" src="On.png">
      let tile = document.createElement('img');
      tile.id = r.toString() + '-' + c.toString();
      tile.className = 'data';
      tile.src = randomLights() + '.png';

      tile.addEventListener('dragstart', dragStart);

      document.getElementById('board').append(tile);
      row.push(tile);
    }
    board.push(row);
  }
};

function dragStart() {
  currTile = this; //this refers to the img tile being dragged
  let currCoords = currTile.id.split('-'); //ex) "0-0" -> ["0", "0"]
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  function neighbors() {
    let nLeft = board[r][c - 1];
    let nRight = board[r][c + 1];
    let nUp = board[r - 1][c];
    let nDown = board[r + 1][c];

    if ((nDown.src = lightsOn)) {
      nDown.src = lightsOff;
    } else {
      nDown.src = lightsOn;
    }
    if ((nUp.src = lightsOn)) {
      nUp.src = lightsOff;
    } else {
      nUp.src = lightsOn;
    }
    if ((nLeft.src = lightsOn)) {
      nLeft.src = lightsOff;
    } else {
      nLeft.src = lightsOn;
    }
    if ((nRight.src = lightsOn)) {
      nRight.src = lightsOff;
    } else {
      nRight.src = lightsOn;
    }
  }

  if ((currTile.src = lightsOn)) {
    currTile.src = lightsOff;
  } else {
    currTile.src = lightsOn;
  }
  neighbors();
  Winner();
}

function Winner() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if ((board[r][c].src = lightsOff)) {
        document.getElementById('win').innerText = 'Winner';
      }
    }
  }
}
