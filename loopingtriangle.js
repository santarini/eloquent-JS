//PASSING STRING ONLY
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

//For loop with .repeat
var str = "#";
for(i = 1; i <= 7; i++){
  console.log(str.repeat(i));
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
