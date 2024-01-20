

let drumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {

        let text =  document.querySelectorAll(".drum")[i].innerHTML;
        
        makesound(text);
        pressedBtn(text);

    });
}


document.addEventListener('keypress',(event)=>{
    makesound(event.key);
    pressedBtn(event.key);
});

function makesound (key){
    
    switch (key) {
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
            break;

        case "k":
            let tom6 = new Audio("sounds/kick-bass.mp3");
            tom6.play();
            break;

        case "l":
            let tom7 = new Audio("sounds/crash.mp3");
            tom7.play();
            break;

        default: console.log(key);

    }
}

pressedBtn=(e)=>{
   let activeBtn = document.querySelector(`.${e}`);
   activeBtn.classList.add('pressed');

   setTimeout(() => {
    activeBtn.classList.remove('pressed');
   }, 100);
   
}



function myfun(a){
   let result = a.slice(2);
    console.log(result);
}

myfun("hello Rohit");