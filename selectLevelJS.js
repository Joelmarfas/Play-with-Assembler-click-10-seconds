// Variable Declaration

let rookieBtn = document.getElementById("rookie");
let hardBtn = document.getElementById("hard");
let insaneBtn = document.getElementById("insane");
//  buttons inside each level
let insaneStart = document.getElementById("start_insane");
let insaneClick = document.getElementById("click_insane");
let clickRookie = document.getElementById('click_rookie');
let startRookie = document.getElementById('start_G');
let clickHard = document.getElementById("click_hard");
let startHard = document.getElementById("start_hard");

let pressBar = document.getElementById("press_bar");

// Each level screen

let rookieLvl= document.getElementById("rookie_level");
let hardLvl= document.getElementById("hard_level");
let insaneLvl= document.getElementById("insane_level");

//  Game Introduction

let mainContainer = document.getElementById('main_container')
let letsGo = document.getElementById('lets_go_container')



// EVENT LISTENERS

rookieBtn.addEventListener('click', rookie);
hardBtn.addEventListener('click', hard);
insaneBtn.addEventListener('click', insane);
letsGo.addEventListener('click', presentGame);

// FUNCTIONS

function presentGame(){
    letsGo.classList.add("is_hidden");
    mainContainer.classList.remove("is_hidden");
}
function rookie(){

    levelSelection.classList.add("is_hidden");
    rookieLvl.classList.remove("is_hidden");
    clickRookie.classList.add("is_hidden")
    startRookie.classList.remove("is_hidden")

}

function hard() {
  levelSelection.classList.add("is_hidden");
  hardLvl.classList.remove("is_hidden");
  clickHard.classList.add("is_hidden");
  startHard.classList.remove("is_hidden");
}

function insane() {
  levelSelection.classList.add("is_hidden");
  insaneLvl.classList.remove("is_hidden");
  insaneStart.classList.remove("is_hidden");
  insaneClick.classList.add("is_hidden");
}
