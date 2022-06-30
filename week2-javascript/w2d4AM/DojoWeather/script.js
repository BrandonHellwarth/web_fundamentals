function cookiemonster(){
    console.log("working");
    element = document.querySelector("#cookiebox");
    element.remove();
}
function TempChange(){
    temp = document.querySelector("#tempmenu");
    arr = [document.querySelector(".num1").innerText, document.querySelector(".num2").innerText, document.querySelector(".num3").innerText, document.querySelector(".num4").innerText, document.querySelector(".num5").innerText, document.querySelector(".num6").innerText, document.querySelector(".num7").innerText, document.querySelector(".num8").innerText];
    arr = arr.map(Number);
    console.log(arr);
    if(temp.value == "celcius"){
        console.log("working");
        for(i=0;i<arr.length;i++){
            arr[i] = arr[i] * 9 / 5 + 32;
            document.querySelector(".num" + i).innerHTML = arr[i];
        }
    }
    if(temp.value == "Farenheight"){
        console.log("working2");
        for(i=0;i<arr.length;i++){
            arr[i] = (arr[i] - 32) * 5 / 9;
            document.querySelector(".num" + i).innerHTML = arr[i];
        }
    }
}