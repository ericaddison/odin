// Helper functions
var isNumeric = function(num){
  return !isNaN(num) && isFinite(num);
};

var setErrorBorder = function(element){
  element.style.border = "2px red solid";
}

var setSuccessBorder = function(element){
  element.style.border = "2px green solid";
}

var setErrorFont = function(element){
  element.style.color = "red";
}

var setAutoFont = function(element){
  element.style.color = "inherit";
}

var setDivClicked = function(element, text){
  element.style.opacity = 0.3;
  element.innerHTML = text;
}

var setDivUnclicked = function(element, text){
  element.style.opacity = 1;
  element.innerHTML = text;
}

// greatest common divisor of 2 integers
var GCD = function(a,b){
  var m = Math.max(a,b);
  var n = Math.min(a,b);

  while(m%n!==0){
    var temp = n;
    n = m%n;
    m = temp;
  }

  return n;
}

// least common multiple of 2 integers
var LCM = function(a,b){
  return (a*b)/GCD(a,b);
}
