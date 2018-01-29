//Creates an array from the start int to the finish int (inclusive)

function range(start, end){
	var numList = [];
  	while(start<=end){
    	numList.push(start);
      	start += 1;
    }  
	return numList
}

//Sums the values in an array

function sum(selArray){
	var result = 0;
  	var i = 0;
  	while (i< selArray.length){
    	result = result + selArray[i];
      	i+=1;
    }
  return result;
}

//This doesn't work yet
//Creates an array from the start int to the finish int (inclusive) with specified step increments

function range(start, end, step){
	var numList = [];
  	while(start<=end){
		if (step === "undefined");{
          	numList.push(start);
      		start += 1;
        }
    }
	return numList
}

