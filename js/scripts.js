var decimalToBinary = function(dec){
  var binaryArray = [0,0,0,0,0,0,0,0]
  for (i = 0 ; i < dec ; i++) {
    var firstZero;

    for (var binaryIndex = 0 ; binaryIndex <= 7 ;binaryIndex++) {
      if (binaryArray[binaryIndex]===0) firstZero = binaryIndex;
    }

    for (var binaryIndex = firstZero ; binaryIndex <= 7; binaryIndex++)
      binaryArray[binaryIndex] = flip(binaryArray[binaryIndex]);
  }

  var resultString="";
  binaryArray.forEach(function(num){
    resultString+=num;
  })
  return resultString;
}

var flip = function(digit) {
  if (digit===0) return 1;
  if (digit===1) return 0;
}



$(document).ready(function(){
  $("#binaryForm").submit(function(event){
    event.preventDefault();
    var value = parseInt($("#input").val());
    $("#result").append("<p>"+decimalToBinary(value)+"</p>");
  });

});
