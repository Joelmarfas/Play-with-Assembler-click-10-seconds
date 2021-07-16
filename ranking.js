let ranking=[];

let currentPlayer=document.getElementById("current_player_name");
let playAgainBtn = document.getElementById("play_again_button");

startButton.addEventListener("click", updateRanking);
startButton.addEventListener("click", currentlyPlaying);
playAgainBtn.addEventListener("click", organizeRanking);

function organizeRanking(){

ranking.sort(function (a, b) {
    if (b.Score > a.Score) {
      return 1;
    }
    if (b.Score < a.Score) {
      return -1;
    }
    return 0;
  });
}

function currentlyPlaying(){
    currentPlayer.innerHTML=userName
}

function updateRanking(){
    let firstName =document.getElementById("first_name");
    let secondName =document.getElementById("second_name");
    let thirdName =document.getElementById("third_name");
    let firstPlace =document.getElementById("first_place");
    let secondPlace =document.getElementById("second_place");
    let thirdPlace =document.getElementById("third_place");
    
    if(ranking.length === 1){
        firstName.innerHTML = ranking[0].Username;
        firstPlace.innerHTML = ranking[0].Score + "clicks";
    }
    else if(ranking.length === 2){
    firstName.innerHTML = ranking[0].Username;
    firstPlace.innerHTML = ranking[0].Score + "clicks";
    secondName.innerHTML = ranking[1].Username;
    secondPlace.innerHTML = ranking[1].Score + "clicks";
    }

    else if(ranking.length > 2){
        firstName.innerHTML = ranking[0].Username;
        firstPlace.innerHTML = ranking[0].Score + "clicks";
        secondName.innerHTML = ranking[1].Username;
        secondPlace.innerHTML = ranking[1].Score + "clicks";
        thirdName.innerHTML = ranking[2].Username;
        thirdPlace.innerHTML = ranking[2].Score + "clicks";
    }
    
}
    