// convenient helper functions

// check if a string is numeric
var isNumeric = function(num){
  return !isNaN(num) && isFinite(num);
};

// check a key event for whether enter was pressed
var checkForEnter = function(event){
  return event.keyCode==13;
}

// get the total height of an element, including padding
var getTotalHeightByID = function(id){
  var totalH = parseInt($('#'+id).css('height'));
  totalH += parseInt($('#'+id).css('padding-top'));
  totalH += parseInt($('#'+id).css('padding-bottom'));
  return totalH;
}
