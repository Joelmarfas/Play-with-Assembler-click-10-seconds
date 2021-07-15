let ranking=[];

let currentPlayer=document.getElementById("current_player_name")

startButton.addEventListener("click", currentlyPlaying);

function currentlyPlaying(){
    currentPlayer.innerHTML=userName
}