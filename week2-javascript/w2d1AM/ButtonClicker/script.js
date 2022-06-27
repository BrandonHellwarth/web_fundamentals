var num = 0
function ButtonSwitch(element){
    console.log("working");
    if(num % 2 == 0){
        element.innerText = "Logout";
    }
    if(num % 2 == 1){
        element.innerText = "Login";
    }
    num++;
    return num;
}
function removeElement(element){
    console.log("working");
    element.remove();
}