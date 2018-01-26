var sizeL = 8;
var sizeH = 8;
str = "#";
spc = " ";
for (i = 1; i < sizeH; i++){
  if (i % 2 == 0)
    console.log("# ".repeat(sizeL))
  else
    console.log(" #".repeat(sizeL))
}
