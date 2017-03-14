// file variables
var GRID_SIZE_MAX = 64;
var GRID_SIZE_MIN = 2;
var GRID_SIZE_DEFAULT = 16;
var gridSize = GRID_SIZE_DEFAULT;
var drawColor = 'white';

// ready setup
$(document).ready(function(){

  $('#gridSizeInput')[0].value = GRID_SIZE_DEFAULT;
  $('#gridSizeInput').keypress(function(event){
    if(checkForEnter(event))
      gridSizeInputEnter(boardDiv, $(this).val());
  });

  $(window).resize(function() {
    var resizeMessage = $('#resizeMessage');
    if(resizeMessage.css('display')==='none')
      resizeMessage.fadeIn(200);
  })

  var boardDiv = $('#drawingBoard');
  makeBoard(boardDiv);
});


// set the drawing color
var setDrawColor = function(color){
  drawColor = color;
}

// Make the drawing board
var makeBoard = function(boardDiv){
  resizeBoard();
  boardDiv.empty();
  makeCells(boardDiv);
  var newCellDim = computeCellDim();
  setCellDimensions(newCellDim, newCellDim);
}


// make the grid of cells for the board
var makeCells = function(boardDiv){
  var n = gridSize;
  for(var i=0; i<n*n; i++)
    boardDiv.append(makeCell());
}

// make a board cell
var makeCell = function(dimPx){
  var newCell = $('<div class="boardCell"></div>');
  newCell.hover(mouseEnterCell, mouseLeaveCell);
  return newCell;
}


// set the dimensions of the cells
var setCellDimensions = function(w,h){
  console.log('setting dims: ' + w + ", " + h);
  $('.boardCell').width(w+'px');
  $('.boardCell').height(h+'px');
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
var gridSizeInputEnter = function(boardDiv, newGridSize){
  var inputLabel = $('#gridSizeInputLabel');
  var errorText = checkGridInputForError(newGridSize);
  if(errorText!==""){
    inputLabel.addClass('errorBox');
    boardDiv.text(errorText);
  } else{
    gridSize = newGridSize;
    boardDiv.text('');
    inputLabel.removeClass('errorBox');
    makeBoard(boardDiv);
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


// resize the drawing board based on the window height
var resizeBoard = function(){
    var wwidth = $(window).width();
    var wheight = $(window).height();

    var titleH = getTotalHeightByID('title');
    var optionsH = getTotalHeightByID('drawingOptions');

    var smallDim = Math.min(wwidth,(wheight-titleH-optionsH-75));
    console.log(smallDim)
    $('#drawingBoard').height(smallDim);
    $('#drawingBoard').width(smallDim);

    $('#resizeMessage').fadeOut(200);
}

// get the current best cell dimension based on the drawingBoard Height
var computeCellDim = function(){
  var rawSize = $('#drawingBoard').height()/gridSize;
  return Math.floor(rawSize*10.0)/10.0;
}
