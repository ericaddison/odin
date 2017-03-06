// enter-key listeners for inputs
var inputs = document.getElementsByClassName('probInput');

for (var i=0; i<inputs.length; i++){
  // wrapped in an IFE to properly closure the value of theFunc
  (function(){
    var ind = inputs[i].id.indexOf("Input");
    var theFunc = inputs[i].id.substring(0,ind);
    inputs[i].addEventListener("keyup",function(event){
      if(event.keyCode==13){
        eval("run_" + theFunc + "();");
      }
    });
  })();
}

// button clicks
var inputButtons = document.getElementsByClassName('inputButton');
for (var i=0; i<inputButtons.length; i++){
  // wrapped in an IFE to properly closure the value of theFunc
  (function(){
    var ind = inputButtons[i].id.indexOf("Input");
    var theFunc = inputButtons[i].id.substring(0,ind);
    inputButtons[i].addEventListener("click",function(event){
          eval("run_" + theFunc + "();");
    });
  })();
}
