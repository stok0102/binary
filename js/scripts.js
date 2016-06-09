var decToOtherCase = function(dec, caseInput){
  if (dec < 1) {
    return "Please enter a positive integer";
  } else if (caseInput > 16 || caseInput < 2) {
    return "Case must be between 2 and 16"
  } else if (dec > (Math.pow(caseInput,10))){
    return "That number is too big."
  } else {
    // debugger;
    var charKey = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    var caseArray = [];
    var resultArray=[0,0,0,0,0,0,0,0,0,0];
    for (var i = 9 ; i >= 0 ; i--) {
      caseArray.push(Math.pow(caseInput,i));
    }
    for (var index = 0 ; index < 10 ; index++) {
      while (dec >= caseArray[index]) {
        // debugger;
        dec -= caseArray[index];
        resultArray[index]++;
      }
    }
    var resultString = ""
    for (var i = 0; i < resultArray.length; i++) {
      resultString+=charKey[resultArray[i]];
    }
    return resultString;
  }
}



$(document).ready(function(){
  $("#binaryForm").submit(function(event){
    event.preventDefault();
    var value = parseInt($("#input").val());
    var caseInput = parseInt($("#caseInput").val());
    $("#result").append("<p>"+decToOtherCase(value,caseInput)+"</p>");
  });

});
