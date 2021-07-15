// Variable Declaration

let roockieBtn = document.getElementById("roockie");
let hardBtn = document.getElementById("hard");
let insaneBtn = document.getElementById("insane");



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

}

function hard(){

    levelSelection.classList.add("is_hidden");
    hardLvl.classList.remove("is_hidden");

}

function insane(){

    levelSelection.classList.add("is_hidden");
    insaneLvl.classList.remove("is_hidden");
}