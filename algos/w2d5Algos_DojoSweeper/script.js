var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            if(theDojo[i][j] > 0){
                result += `<button class="tatami" onclick="location.reload()"></button>`;//Challenge 3
            }
            else{
                result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
            }
        }
    }
return result;
}
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
arr = [[],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)],[getRandomInt(10),getRandomInt(10)]];//Challenge 2
console.log(arr);
console.log("before: " + theDojo);
for(a=1;a<=10;a++){
    while(arr[a] == arr[a-1]){
        arr[a][0] = getRandomInt(10);
        arr[a][1] = getRandomInt(10);
    }
    theDojo[arr[a][0]][arr[a][1]]++;
}
console.log("after: " + theDojo);

function howMany(i, j, element) {
    console.log({i, j});
    neighbours = 0;
    //inner box
    if(i > 0 && i < 9 && j > 0 && j < 9){
        neighbours = neighbours - theDojo[i][j];
        i--;
        j--;
        for(b=0;b<3;b++){
            for(a=0;a<3;a++){
                if(theDojo[i][j] > 0){
                    neighbours += theDojo[i][j];
                }
                j++;
            }
            i++;
            j-=3;
        }
        j++;
        i-=2;
    }
    //left column
    if(i > 0 && i < 9 && j < 1){
        neighbours = neighbours - theDojo[i][j];
        i--;
        for(b=0;b<3;b++){
            for(a=0;a<2;a++){
                if(theDojo[i][j] > 0){
                    neighbours += theDojo[i][j];
                }
                j++;
            }
            i++;
            j-=2;
        }
        i-=2;
    }
    //right column
    if(i > 0 && i < 9 && j > 8){
        neighbours = neighbours - theDojo[i][j];
        i--;
        j--;
        for(b=0;b<3;b++){
            for(a=0;a<2;a++){
                if(theDojo[i][j] > 0){
                    neighbours += theDojo[i][j];
                }
                j++;
            }
            i++;
            j-=2;
        }
        j++;
        i-=2;
    }
    //top row
    if(i < 1 && j > 0 && j < 9){
        neighbours = neighbours - theDojo[i][j];
        j--;
        for(b=0;b<2;b++){
            for(a=0;a<3;a++){
                neighbours += theDojo[i][j];
                j++;
            }
            j-=3;
            i++;
        }
        j++;
        i-=2;
    }
    //bottom row
    if(i > 8 && j > 0 && j <9){
        neighbours = neighbours - theDojo[i][j];
        i--;
        j--;
        for(b=0;b<2;b++){
            for(a=0;a<3;a++){
                neighbours += theDojo[i][j];
                j++;
            }
            i++;
            j-=3;
        }
        j-=2;
        i--;
    }
    //top left corner
    if(i < 1 && j < 1){
        neighbours = neighbours - theDojo[i][j];
        for(b=0;b<2;b++){
            for(a=0;a<2;a++){
                neighbours += theDojo[i][j];
                j++;
            }
            i++;
            j-=2;
        }
        i-=2;
    }
    //top right corner
    if(i < 1 && j > 8){
        neighbours = neighbours - theDojo[i][j];
        j--;
        for(b=0;b<2;b++){
            for(a=0;a<2;a++){
                neighbours += theDojo[i][j];
                j++;
            }
            i++;
            j-=2;
        }
        i-=2;
        j++;
    }
    //bottom left corner
    if(i > 8 && j < 1){
        neighbours = neighbours - theDojo[i][j];
        i--;
        for(b=0;b<2;b++){
            for(a=0;a<2;a++){
                neighbours += theDojo[i][j];
                j++;
            }
            i++;
            j-=2;
        }
        i--;
    }
    //bottom right corner
    if(i > 8 && j > 8){
        neighbours = neighbours - theDojo[i][j];
        i--;
        j--;
        for(b=0;b<2;b++){
            for(a=0;a<2;a++){
                neighbours += theDojo[i][j];
                j++;
            }
            i++;
            j-=2;
        }
        i--;
        j++;
    }
    element.innerText = neighbours;//challenge 1
    // alert("There are " + neighbours + " ninjas in adjacent tiles");
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);  