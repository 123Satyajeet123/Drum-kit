var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //which button triggered the event 
        // this is the identity of the eventListner that triggered the event 
        // basically gives the html 
        // this.style.color="white";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}
// if () is added then it will trigger automatically before the event listner

// function handleClick(){
//     alert("I am clicked");
// }



// -----------------------constructor function---------------------------------
//  function BellBoy(name,age,permit,language){
//      this.name=name;
//      this.age=age;
//      this.permit=permit;
//      this.language=language;
//  }

//  var BellBoy1 = new BellBoy("Sam",19,"Yes","English");
//  console.log(BellBoy1);


document.addEventListener("keydown", function (event) {
    makeSound(event.key);  //key is the property of event like which key the event is it
    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
}
