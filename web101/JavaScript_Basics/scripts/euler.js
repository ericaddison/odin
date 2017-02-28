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
