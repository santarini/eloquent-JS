
function countBs(str){
	var currentLetter = 0;
	var counter = 0;
	while (currentLetter <= str.length){
  		if (str.charAt(currentLetter) == "B")
      		counter += 1;
  	}
}

console.log(countBs("BBBBC"));
console.log("CL is ",currentLetter);
// → 2
//console.log(countChar("kakkerlak", "k"));
// → 4


/*
while (currentLetter <= totalLength){
  	if str.charAt(currentLetter) == "B"
      count += 1;
  	else
      return;
  }
  console.log(count)

///

var currentLetter = 0;
var count = 0 ;

function countBs(str){
  for(currentLetter = 0; currentLetter < str.length; currentLetter++)
    if (str.charAt(currentLetter)=="B");
  		count += 1;
  		return count;
        
}

 */
