var currentLetter = 0;
var counter = 0;
function countBs(str){
  while (currentLetter <= str.length){
  	if (str.charAt(currentLetter) == "B"){
      		counter += 1;
    		currentLetter += 1;
        }else{
    		currentLetter += 1;
        }
  }
  return counter
}
