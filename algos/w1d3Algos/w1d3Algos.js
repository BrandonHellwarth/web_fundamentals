for(var i=0; i<10; i++){
    console.log(i);
}
console.log("outside of the loop" + i);

var issunny=true;
var temp=45;
var israining=false;
var whatToBring="I should bring: ";
if(issunny){//if the variable is true it will run
    whatToBring += "sunglasses, ";
}
if(temp < 50){
    whatToBring += "a coat, ";
}
if(israining){
    whatToBring += "an umbrella";
}
else{//else statment will only run after the statement above it
    whatToBring += "aint no Rihanna up in hea, ";
}
whatToBring += "and a smile!";
console.log(whatToBring);