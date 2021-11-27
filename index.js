//detect click
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var button=this.innerHTML;
    playSound(button);
    buttonAnimation(button);

    


});
}

//detect keypress
document.addEventListener('keypress',function(event){

    buttonAnimation(event.key)
    playSound(event.key);
});

function playSound(x){
    switch (x) {
        case 'w':
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();     
            break;
        case 'a':
             var audio= new Audio("sounds/tom-2.mp3");
             audio.play();
             break;

        case 's':
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;   

        case 'j':
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
                break;
         case 'k':
             var audio= new Audio("sounds/crash.mp3");
            audio.play();
           break;



           case 'l':
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


        default:alert("please click any of the buttons or press the valid key")
            break;
    }

}
 
 function buttonAnimation(Key){
   var button= document.querySelector("."+Key );
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");

    },200);
 }; 