//Creates an array from the start int to the finish int (inclusive)

function range(start, end){
	var numList = [];
  	while(start<=end){
    	numList.push(start);
      	start += 1;
    }  
	return numList
}
