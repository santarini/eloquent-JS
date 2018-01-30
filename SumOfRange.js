//Creates an array from the start int to the finish int (inclusive of finish)

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

//Creates an array from the start int to the finish int (inclusive of finish) with specified step increments

function range(start, end, step){
	var numList = [];
  if (step == undefined){
  	step = 1;
  }
  if (end < start){
  	while (end <= start){
    	numList.push(start);
      	start += step;
    }
  }else{
    while (start <= end){
    	numList.push(start);
      	start += step;
    }
  }
    return numList;
}
