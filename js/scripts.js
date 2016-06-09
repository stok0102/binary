var decToOtherCase = function(dec, caseInput){
  // debugger;
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
  console.log(resultArray);
  console.log(dec);
}



$(document).ready(function(){
  $("#binaryForm").submit(function(event){
    event.preventDefault();
    var value = parseInt($("#input").val());
    var caseInput = parseInt($("#caseInput").val());
    $("#result").append("<p>"+decToOtherCase(value,caseInput)+"</p>");
  });

  decToOtherCase(1352,9);

});
