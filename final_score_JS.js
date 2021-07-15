// VARIABLE DECLARATION

let playAgainBtn = document.getElementById("play_again_button")



playAgainBtn.addEventListener("click", playAgainSwitch);

function playAgainSwitch(){
    
    
    console.log(ranking);
    
    finalScoreCont.classList.add("is_hidden");
    userNameContainer.classList.remove("is_hidden");
}