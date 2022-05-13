const rows = 3;
const columns = 3;

let currTile;
let otherTile; //blank tile

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

  console.log(r, c);

  console.log(currTile.id);

  function neighbors() {
    let neighbor1 = currTile;
  }

  if ((currTile.src = lightsOff)) {
    currTile.src = lightsOn;
  } else {
    currTile.src = lightsOff;
  }

  //   if (r == 0 && c == 0) {
  //     if ((board[0][1].src = lightsOn)) {
  //       board[0][1].src = lightsOff;
  //     } else {
  //       board[0][1].src = lightsOn;
  //     }
  //   }
}

function clickLights() {
  //check rows
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 2; c++) {
      let light1 = board[r][c];
      let light2 = board[r][c + 1];
      let light3 = board[r][c + 2];
      if (light1.src == light2.src && light2.src == light2.src) {
        // candy1.src = './images/blank.png';
        // candy2.src = './images/blank.png';
        // candy3.src = './images/blank.png';
        // score += 30;
      }
    }
  }

  //check columns
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 2; r++) {
      let light1 = board[r][c];
      let light2 = board[r + 1][c];
      let light3 = board[r + 2][c];
      if (
        candy1.src == candy2.src &&
        candy2.src == candy3.src &&
        !candy1.src.includes('blank')
      ) {
        // candy1.src = './images/blank.png';
        // candy2.src = './images/blank.png';
        // candy3.src = './images/blank.png';
        // score += 30;
      }
    }
  }
}

// function dragOver(e) {
//   e.preventDefault();
// }

// function dragEnter(e) {
//   e.preventDefault();
// }

// function dragLeave() {}

// function dragDrop() {
//   otherTile = this; //this refers to the img tile being dropped on
// }

// function dragEnd() {}

// function dragEnd() {
//   if (!otherTile.src.includes('3.jpg')) {
//     return;
//   }

//   let currCoords = currTile.id.split('-'); //ex) "0-0" -> ["0", "0"]
//   let r = parseInt(currCoords[0]);
//   let c = parseInt(currCoords[1]);

//   let otherCoords = otherTile.id.split('-');
//   let r2 = parseInt(otherCoords[0]);
//   let c2 = parseInt(otherCoords[1]);

//   let moveLeft = r == r2 && c2 == c - 1;
//   let moveRight = r == r2 && c2 == c + 1;

//   let moveUp = c == c2 && r2 == r - 1;
//   let moveDown = c == c2 && r2 == r + 1;

//   let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

//   if (isAdjacent) {
//     let currImg = currTile.src;
//     let otherImg = otherTile.src;

//     currTile.src = otherImg;
//     otherTile.src = currImg;

//     turns += 1;
//     document.getElementById('turns').innerText = turns;
//     console.log(board[0][0]);
//     if (board[0][0].src == 'http://127.0.0.1:5500/2.jpg') {
//       console.log('win');
//     }
//   }
// }

// const cellElements = document.('data');

// cellElements.forEach((cell) => {
//   cell.addEventListener('click', handleClick);
// });

// function handleClick(e) {
//   console.log('clickssed');
// }
