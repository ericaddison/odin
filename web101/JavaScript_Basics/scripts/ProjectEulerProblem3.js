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

// find the biggest prime factor of a value n
var biggestPrimeFactor = function(n){
  //for(var i=Math.floor(n/2); i>=2; i--){
  //  if(isFactor(i,n) && isPrime(i))
  //    return i;
  //}
  biggestPrime = 1;
  for(var i=2; i<=Math.floor(Math.sqrt(n)); i++){
    if(isFactor(i,n)){
      var p1 = n/i;
      if(isPrime(p1) && p1>biggestPrime)
        biggestPrime = p1;
      else if(isPrime(i) && i>biggestPrime)
        biggestPrime = i;
    }

  }
  return biggestPrime;
}

// is n a factor of m?
var isFactor = function(n,m){
  return m%n===0;
}

var isPrime = function(n){
  for(var i=2; i<=Math.sqrt(n); i++){
    if(n%i === 0)
      return false;
  }
  return true;
}
