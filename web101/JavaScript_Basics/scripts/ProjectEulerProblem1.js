// Problem 1: multiples of 3 and 5
var run_p1 = function(){
  var inputSpan = document.getElementById('p1InputSpan');
  var input1 = document.getElementById('p1Input');
  var resultDiv = document.getElementById('p1Result');
  var value = (input1.value);

  if(!isNumeric(value)){
    resultDiv.innerHTML = "Error: Please enter a numeric value...";
    setErrorBorder(resultDiv);
    setErrorFont(inputSpan);
  }
  else if(value<0 || value>1000){
    resultDiv.innerHTML = "Error: Please enter an integer between 0 and 1000...";
    setErrorBorder(resultDiv);
    setErrorFont(inputSpan);
  }
  else {
    resultDiv.innerHTML = "Result: " + sumMultiplesOfThreeAndFive(value);
    setSuccessBorder(resultDiv);
    setAutoFont(inputSpan);
  }

};

var sumMultiplesOfThreeAndFive = function(value){
  var sum = 0;
  for(var i=0; i<value; i++)
    sum += (i%3==0 || i%5==0) ? i : 0;
  return sum;
}
