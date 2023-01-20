var buttons = document.querySelectorAll(".drum").length
for(var i=0;i<buttons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",
    function (){
        var drum = this.innerHTML;
        sounds(drum);
        animations(drum);
    });
}

document.addEventListener("keydown",
function (event){
    sounds(event.key);
    animations(event.key);
});

function sounds(drum){
    switch(drum){
        case "w":var audio = new Audio("sounds/tom-1.mp3");
                break;
        case "a":var audio = new Audio("sounds/tom-2.mp3");
                break;
        case "s":var audio = new Audio("sounds/tom-3.mp3");
                break;
        case "d":var audio = new Audio("sounds/tom-4.mp3");
                break;
        case "j":var audio = new Audio("sounds/crash.mp3");
                break;
        case "k":var audio = new Audio("sounds/kick-bass.mp3");
                break;
        case "l":var audio = new Audio("sounds/snare.mp3");
                break;
    }
    audio.play();
}


function animations(key){
    var active = document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100);
}