
playAgainBtn.addEventListener("click", playAgainSwitch);

function playAgainSwitch(){
    
    ranking.sort(function (a, b) {
        if (b.Score > a.Score) {
          return 1;
        }
        if (b.Score < a.Score) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      counter=0;
      console.log(ranking);
    
    finalScoreCont.classList.add("is_hidden");
    userNameContainer.classList.remove("is_hidden");
}