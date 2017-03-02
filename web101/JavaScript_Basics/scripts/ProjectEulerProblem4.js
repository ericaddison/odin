// Problem 4: Palindromic Numbers
// brute force!

var running = false;

var run_p4 = function(){

  if(running){
    return;
  }

  running = true;
  var button = document.getElementById('p4InputDiv');
  setDivClicked(button, "Scanning...");

  // scan downward through 3-digit numbers
  for(var n1 = 200; n1>0; n1--)
    scanValues(n1);

}

var scanValues = function(n1){
  for(var i=n1; i>0; i--){
      var prod = n1*i;
      window.setTimeout('updateTextAndCheckDone(' + n1 + ', ' + i
        + ', ' + prod + ')',10);
    }
}

var updateTextAndCheckDone = function(n1, n2, prod){
  document.getElementById('p4Result').innerHTML = "Scanning: " + n1 +
    "*" + n2 + " = " + prod;
    if(n1===1 && n2===1){
      running = false;
      var button = document.getElementById('p4InputDiv');
      setDivUnclicked(button, "Start Scan");
    }
}

var isPalindromic = function(num){

}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
