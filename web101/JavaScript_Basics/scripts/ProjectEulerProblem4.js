// Problem 4: Palindromic Numbers

var running = false;
var timeout = 10;

var run_p4 = function(){

  if(running){
    return;
  }

  running = true;
  var button = document.getElementById('p4InputDiv');
  setDivClicked(button, "Scanning...");

  var N_MAX = 999;
  runScan(N_MAX);

}

// Scan downward through 6-digit Palindromic numbers
var runScan = function(N_MAX){
  for(var d1=9; d1>=0; d1--)
    for(var d2=9; d2>=0; d2--)
      for(var d3=9; d3>=0; d3--){
        var nextNum = parseInt(''+d1+d2+d3+d3+d2+d1);
        window.setTimeout('updateText(' + nextNum + ')',2*timeout);

        for(var i=999; i>=100; i--){
          if(nextNum%i===0){
            if(nextNum/i<N_MAX){
              window.setTimeout('updateTextAndDone(' + i
                + ', ' + nextNum/i + ', ' + nextNum + ')',2*timeout);
              return;
            }
          }
        }
      }
}

var updateText = function(num){
  document.getElementById('p4Result').innerHTML = "Checking " + num;
  sleepFor(timeout);
}


var updateTextAndDone = function(n1, n2, prod){
  document.getElementById('p4Result').innerHTML = "Found " + prod
  + " = " + n1 + "*" + n2;
  running = false;
  var button = document.getElementById('p4InputDiv');
  setDivUnclicked(button, "Start Scan");
}

var isPalindromic = function(num){
  var str = num.toString();
  var len = str.length;
  for(var i=0; i<len; i++){
    if(str[i] !== str[len-i-1])
      return false;
  }
  return true;
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}
