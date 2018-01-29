function countChar(str, char){
  var currentLetter = 0;
  var counter = 0;
  while (currentLetter <= str.length){
  		if (str.charAt(currentLetter) == char){
      		counter += 1;
    		currentLetter += 1;
        }else{
    		currentLetter += 1;
        }
  	}
  return counter
} 
