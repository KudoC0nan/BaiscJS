var buts = document.querySelectorAll(".drum");

// for (var i = 0; i < buts.length; i++) {
//     buts[i].addEventListener("click", function () {   //This is an anonymus function with no name, instead of writing another one and calling it
//         alert("I got clicked!");  
//     });
// }

for (var i = 0; i < buts.length; i++) {
        buts[i].addEventListener("click", function () {   
            // if (this.innerHTML === "w") {
            //     var audio = new Audio('sounds/tom-1.mp3');
            // }

            // else if (this.innerHTML === "a") {
            //     var audio = new Audio('sounds/tom-2.mp3');
            // }

            // else if (this.innerHTML === "s") {
            //     var audio = new Audio('sounds/tom-3.mp3');
            // }

            // else if (this.innerHTML === "d") {
            //     var audio = new Audio('sounds/tom-4.mp3');
            // }

            // else if (this.innerHTML === "j") {
            //     var audio = new Audio('sounds/snare.mp3');
            // }

            // else if (this.innerHTML === "k") {
            //     var audio = new Audio('sounds/crash.mp3');
            // }

            // else {
            //     var audio = new Audio('sounds/kick-bass.mp3');
            // }
            
            // audio.play();

            var buttonInnerHtml = this.innerHTML;

            makeSound(buttonInnerHtml);
            Animate(buttonInnerHtml);

        });
    }

document.addEventListener("keypress" , function(event) {
    makeSound(event.key);
    Animate(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonInnerHtml);
            break;
    }
}
// We can add a fucntion for event listener in this way
// function handleClick() {
//     alert("I got clicked!");
// }

function Animate (currentKey) {
    var acitveButton = document.querySelector("." + currentKey);
    acitveButton.classList.add("pressed");

    setTimeout(function() {
        acitveButton.classList.remove("pressed");
    }, 100);
}