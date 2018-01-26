//PASSING STRING ONLY (cleanest way)
//For loop with Array.join
for(i = 1; i <= 7; i++){
  console.log(Array(i).join("#"));
}

//For loop with .repeat
for(i = 1; i <= 7; i++){
  console.log("#".repeat(i));
}

//PASSING VARIABLE
//For loop with Array.join
var str = "#";
for(i = 1; i <= 7; i++){
  console.log(Array(i).join(str));
}

//While loop with repeat
var i = 1
var str = "#";
while(i < 7){
  console.log(str.repeat(i));
  i += 1
}

//While loop with repeat
var i = 1
var str = "#";
while(i < 7){
  console.log(Array(i).join(str));
  i += 1
}

//Method suggested in text (these strike me as odd)
//while loop
var i = 1
var str = "#";
while(i < 7){
  console.log(str);
  i += 1;
  str += "#";
}


//For loop
var str = "#";
for(i = 1; i <= 7; i++){
  console.log(str)
  str += "#";
}
