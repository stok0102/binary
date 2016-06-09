var decToOtherCase = function(dec, caseInput){
  // debugger;
  var charKey = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
  var caseArray = [];
  var resultArray=[0,0,0,0,0,0,0,0,0,0];
  for (var i = 9 ; i >= 0 ; i--) {
    caseArray.push(Math.pow(caseInput,i));
  }
  console.log(caseArray);
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
  console.log(resultArray);
  console.log(dec);
  console.log(resultString);
}



$(document).ready(function(){
  $("#binaryForm").submit(function(event){
    event.preventDefault();
    var value = parseInt($("#input").val());
    var caseInput = parseInt($("#caseInput").val());
    $("#result").append("<p>"+decToOtherCase(value,caseInput)+"</p>");
  });

  decToOtherCase(987987908273,16);

});
