// file variables
var colors = ['white', 'black', 'grey', 'red', 'green', 'blue', 'yellow', 'purple'];

// ready setup
$(document).ready(function(){
  var optionsDiv = $('#drawingOptions');
  addColorChoices(optionsDiv);
  $('#whiteColorChoice').addClass('activeColor');
});

var addColorChoices = function(elem){

  for(ind in colors)
    elem.append(makeColorChoice(colors[ind]));

}

var makeColorChoice = function(color){
  var $newColorOption = $('<div id="'+color+'ColorChoice"></div>');
  $newColorOption.addClass('colorChoice');
  $newColorOption.css('background-color',color);
  $newColorOption.click(function(){
    setDrawColor(color);
    $('.colorChoice').removeClass('activeColor');
    $(this).addClass('activeColor');
  })
  return $newColorOption;
}
