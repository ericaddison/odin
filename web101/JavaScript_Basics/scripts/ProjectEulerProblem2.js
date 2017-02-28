// Problem 2: Sum of Even Fibonacci Numbers

var run_p2 = function(){
  var inputSpan = document.getElementById('p2InputSpan');
  var input1 = document.getElementById('p2Input');
  var resultDiv = document.getElementById('p2Result');
  var value = (input1.value);
  var MAX_N = 32;
  var MIN_N = 0;

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
    resultDiv.innerHTML = "Result: " + sumOfEvenFibbs(value);
    setSuccessBorder(resultDiv);
    setAutoFont(inputSpan);
  }

};

// Sum of even fib numbers fuction
var sumOfEvenFibbs = function(n){
  var sum = 0;
  for(var i=2; i<=n; i+=3)
    sum += Fibonacci(i);
  return sum;
}

// Iterative Fibonacci function
var Fibonacci = function(n){
  if(n<0)
    return -1;
  if(n===0 || n===1)
    return 1;

  var fnm1 = 1;
  var fn = 1;
  for(var i=2; i<=n; i++){
    var temp = fn;
    fn += fnm1;
    fnm1 = temp;
  }
  return fn;
};
