// convenient helper functions

// check if a string is numeric
var isNumeric = function(num){
  return !isNaN(num) && isFinite(num);
};

// check a key event for whether enter was pressed
var checkForEnter = function(event){
  return event.keyCode==13;
}
