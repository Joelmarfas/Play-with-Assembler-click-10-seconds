
// VARIABLES DECLARATION

let insaneClick = document.getElementById("click_insane");
let insaneStart=document.getElementById("start_insane");

let counter=0

// EVENT LISTENERS
insaneStart.addEventListener("click", startGame);
insaneClick.addEventListener("click", movement);
insaneClick.addEventListener("click", counting);

// FUNCTIONS

function startGame(){
    
    insaneStart.classList.add("is_hidden");
    insaneClick.classList.remove("is_hidden");
}

function movement(){

    let btnWidth = insaneClick.getBoundingClientRect().width;
    let btnHeight = insaneClick.getBoundingClientRect().height;

    let contWidth = gameContainer.getBoundingClientRect().width;
    let contHeight = gameContainer.getBoundingClientRect().height;

    let x = (Math.random() * (contWidth - btnWidth)).toFixed();
    let y = (Math.random() * (contHeight - btnHeight));

    insaneClick.style.left = x +'px';
    insaneClick.style.top = y +'px';
        
}

function counting(){

    counter++

    console.log(counter)
}