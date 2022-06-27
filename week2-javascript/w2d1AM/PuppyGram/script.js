function UploadPup(element){
    console.log("wazza");
    element.innerText = "Uploaded! Thank you.";
}
function removeElement(element){
    console.log("wazza2");
    element.remove();
}
function playVideo(element){
    console.log("working");
    element.play();
}
function pauseVideo(element){
    element.pause();
}
function changeImg(element){
    console.log("working");
    element.src = "anothaPuppy.jpeg";
}
function cookieMonster(element){
    console.log("working");
    element = document.querySelector("#cookiebox");
    element.remove();
}