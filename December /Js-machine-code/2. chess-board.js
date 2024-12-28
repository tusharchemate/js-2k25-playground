<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chessboard</title>
  
</head>
<body>
  <h1>Chessboard/Grid Layout</h1>
  <div id="chessboard"></div>
</body>
</html>

------- Js ----

const createChessBoard = (size = 8) => {
	const chessBoard = document.getElementById('chessboard');
  chessBoard.innerHTML ="";
  
  for(let row = 0; row < size; row++) {	

  	for(let col = 0; col < size; col++) {
    	
      // will create a cell
      const cell = document.createElement('div');
      
      if((row + col) % 2 === 0) {	
      	// will set color to white
        cell.classList.add('white')
      
      } else {
      	cell.classList.add('black');
      }
   
    	chessBoard.appendChild(cell);
    }
 
  }
  
}

createChessBoard();


----- css -----
  #chessboard {
  display:grid;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows:repeat(8, 50px);
  border: 2px dashed orchid;
  width:400px;
}
.white {
    background-color: white;
}
.black {
    background-color: black;
}
