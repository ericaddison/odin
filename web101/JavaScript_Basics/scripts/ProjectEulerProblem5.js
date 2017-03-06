// Problem 5: Smallest Multiple

// BRUTE FORCE ... clearly need a more clever way!

var run_p5 = function(){
  console.log("In p5!");

  var inputSpan = document.getElementById('p5InputSpan');
  var input1 = document.getElementById('p5Input');
  var resultDiv = document.getElementById('p5Result');
  var value = (input1.value);

  resultDiv.innerHTML = "Result: " + smallestMultiple(value);


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
