// Problem 3: Biggest Prime Factor

var run_p3 = function(){
  var inputSpan = document.getElementById('p3InputSpan');
  var input1 = document.getElementById('p3Input');
  var resultDiv = document.getElementById('p3Result');
  var value = (input1.value);
  var MAX_N = 32;
  var MIN_N = 0;

  if(!isNumeric(value)){
    resultDiv.innerHTML = "Error: Please enter a numeric value...";
    setErrorBorder(resultDiv);
    setErrorFont(inputSpan);
  }
  else {
    resultDiv.innerHTML = "Result: " + biggestPrimeFactor(value);
    setSuccessBorder(resultDiv);
    setAutoFont(inputSpan);
  }

};

// Sum of even fib numbers fuction
var biggestPrimeFactor = function(n){

  return "Looking for biggest prime factor of " + n;
}
