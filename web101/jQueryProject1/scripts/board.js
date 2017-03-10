// file variables
var GRID_SIZE_MAX = 64;
var GRID_SIZE_MIN = 2;
var GRID_SIZE_DEFAULT = 16;
var drawColor = 'white';

// ready setup
$(document).ready(function(){
  var boardDiv = $('#drawingBoard');
  makeBoard(boardDiv, GRID_SIZE_DEFAULT);

  $('#gridSizeInput')[0].value = GRID_SIZE_DEFAULT;
  $('#gridSizeInput').keypress(function(event){
    if(checkForEnter(event))
      gridSizeInputEnter(boardDiv, $(this).val());
  });

});

// set the drawing color
var setDrawColor = function(color){
  drawColor = color;
}

// Make the drawing board
var makeBoard = function(boardDiv, n){

  var cellDim = boardDiv.height()/n;
  boardDiv.empty();
  makeCells(boardDiv, n, cellDim);

}

var makeCells = function(boardDiv, n, cellDim){
  for(var i=0; i<n*n; i++){
    boardDiv.append(makeCell(cellDim));
  }
}

// make a board cell
var makeCell = function(dimPx){
  var newCell = $('<div class="boardCell"></div>');
  newCell.height(dimPx + 'px');
  newCell.width(dimPx + 'px');
  newCell.hover(mouseEnterCell, mouseLeaveCell);
  return newCell;
}

// mouse enters a cell
var mouseEnterCell = function(){
  $(this).addClass("activeCell");
}

// mouse leaves a cell
var mouseLeaveCell = function(){
  $(this).addClass("drawnCell");
  $(this).removeClass("activeCell");
  $(this).css('background-color',drawColor);
}

// "Enter" is pressed in the grid-size input field
var gridSizeInputEnter = function(boardDiv, gridSize){
  var inputLabel = $('#gridSizeInputLabel');
  var errorText = checkGridInputForError(gridSize);
  if(errorText!==""){
    inputLabel.addClass('errorBox');
    boardDiv.text(errorText);
  } else{
    boardDiv.text('');
    inputLabel.removeClass('errorBox');
    makeBoard(boardDiv, Math.floor(gridSize));
  }

}

// check for error in the grid-size input value
var checkGridInputForError = function(gridSize){
    if(!isNumeric(gridSize))
      return "Please enter a numeric value between " + GRID_SIZE_MIN
        + " and " + GRID_SIZE_MAX;
    else if( gridSize<2 || gridSize>64 )
      return "Please enter a value between " + GRID_SIZE_MIN
        + " and " + GRID_SIZE_MAX;
    else
      return "";
}
