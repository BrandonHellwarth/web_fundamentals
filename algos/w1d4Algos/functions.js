function greetuser(firstname,lastname){
    console.log("Hello " + firstname + " " + lastname);
}
greetuser("Brandon","Hellwarth");
greetuser("Saurabh","Dahal");
/*Parameter-> the variable(s) that represents what the function is expecting as input. Parameters are set when you DEFINE the function
Argument-> the data that I give to the function when I INVOKE (CALL) the function
->The value of a function call is whatever that function call RETURNS*/
/*RETURN/BREAK DEMO*/
function sumtwonumbers(num1,num2){
    for(a=0;a<=1;a++){
        console.log("before break");
        break;
        console.log("after break");
    }
    for(c=0;c<=1;c++){
    console.log("before return");
    return num1 + num2;
    console.log("after return");/*RETURN statements will end a function while BREAK statements will ONLY end the code block they are in*/
    }
    for(b=0;b<=1;b++){
        console.log("wont print because of return");
    }
}
sum=sumtwonumbers(3,9);
console.log(sum);
/*Array search Demonstration*/
artists=["Drake","J cole", "Hanna Montana", "kanye", "Ariana Grande"];
function searchforartist(artistname){
    for(i=0;i<artists.length;i++){
        if(artists[i] == artistname){
            return "Found your artists at index number " + i;
        }
    }
        console.log("Artist not found");
}
console.log(searchforartist("kanye"));
console.log(searchforartist("kendrick"));