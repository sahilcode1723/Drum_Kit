// Detecting button press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0 ; i<numberOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonInnerHTML=this.innerHTML;
    MakeSound(buttonInnerHTML);
    ButtonAnimation(buttonInnerHTML);
    
})
}

// Detecting keyboard press
document.addEventListener("keydown" , function(event){
    MakeSound(event.key);
    ButtonAnimation(event.key);
})

function MakeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;   
        default:
            console.log(key);             
    }
}


function ButtonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100)
}