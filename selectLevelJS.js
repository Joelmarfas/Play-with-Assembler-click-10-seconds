// Variable Declaration

let roockieBtn = document.getElementById("roockie");
let hardBtn = document.getElementById("hard");
let insaneBtn = document.getElementById("insane");
    //  buttons inside each level
let insaneStart=document.getElementById("start_insane");
let insaneClick = document.getElementById("click_insane");
let clickRoockie = document.getElementById('click_roockie');
let startRoockie = document.getElementById('start_G');


        // Each level screen

let roockieLvl= document.getElementById("roockie_level");
let hardLvl= document.getElementById("hard_level");
let insaneLvl= document.getElementById("insane_level");



// EVENT LISTENERS


roockieBtn.addEventListener("click", roockie);
hardBtn.addEventListener("click", hard);
insaneBtn.addEventListener("click", insane);



// FUNCTIONS

function roockie(){

    levelSelection.classList.add("is_hidden");
    roockieLvl.classList.remove("is_hidden");
    clickRoockie.classList.add("is_hidden");
    startRoockie.classList.remove("is_hidden");

}

function hard(){

    levelSelection.classList.add("is_hidden");
    hardLvl.classList.remove("is_hidden");
    

}

function insane(){

    levelSelection.classList.add("is_hidden");
    insaneLvl.classList.remove("is_hidden");
    insaneStart.classList.remove("is_hidden");
    insaneClick.classList.add("is_hidden");
}