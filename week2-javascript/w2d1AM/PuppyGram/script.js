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
function incrementLike(id){
    console.log("liking!", id);
    element = document.querySelector(id);
    console.log("element looks like this", element.innerText);
    element.innerText++;
    // var likecount = Number(element.innerText); you can force a variable to be a number with Number()
    console.log("new like count: " + element.innerText);
}