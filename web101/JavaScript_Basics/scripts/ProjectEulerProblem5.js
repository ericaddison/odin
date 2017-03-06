// Problem 5: Smallest Multiple

// BRUTE FORCE ... clearly need a more clever way!

var run_p5 = function(){

  var inputSpan = document.getElementById('p5InputSpan');
  var input1 = document.getElementById('p5Input');
  var resultDiv = document.getElementById('p5Result');
  var value = (input1.value);

  var MAX_N = 30;
  var MIN_N = 2;

  if(!isNumeric(value)){
    resultDiv.innerHTML = "Error: Please enter a numeric value...";
    setErrorBorder(resultDiv);
    setErrorFont(inputSpan);
  }
  else if(value<MIN_N || value>MAX_N){
    resultDiv.innerHTML = "Error: Please enter an integer between "
    + MIN_N + " and " + MAX_N + "...";
    setErrorBorder(resultDiv);
    setErrorFont(inputSpan);
  }
  else {
    resultDiv.innerHTML = "Result: " + smallestMultiple(value);
    setSuccessBorder(resultDiv);
    setAutoFont(inputSpan);
  }

}

// find the smallest value that is a multiple of 1..n
var smallestMultiple = function(n){
  var curNum = n;
  while( !checkGoodMultiple(curNum,n) )
    curNum++;

  return curNum;
}

var checkGoodMultiple = function(num, n){
  for(var i=2; i<=n; i++)
    if(num%i !== 0)
      return false;
  return true;
}
