// ADD EVENT LISTENERS
clickHard.addEventListener("click", countHardClicks);
startHard.addEventListener("click", hideG);

/* FUNCTION THAT COUNTS THE CLICKS ON PRESSING CLICK ME BUTTON */
function countHardClicks() {
  counter += 1;
}
// PRESSING START GAME MAKES ITSELF HIDE AND 'CLICK_hard' BUTTON APPEAR
function hideG() {
  startHard.classList.add("is_hidden");
  clickHard.classList.remove("is_hidden");
  

  setTimeout(function () {
    let currentScore = document.getElementById("current_score");
    currentScore.innerHTML = counter;
    let lastScore = document.getElementById("last_score");
    lastScore.innerHTML = counter;
    let lastResult = document.getElementById("last_result");
    let currentlyPlaying = document.getElementById("currently_playing");
    
    ranking.push({ Username: userName, Score: counter });
    
    //  SHOW AND HIDE ELEMENTS

    finalScoreCont.classList.remove("is_hidden");
    clickHard.classList.add("is_hidden");
    lastResult.classList.remove("is_hidden");
    currentlyPlaying.classList.add("is_hidden");
    
  }, 10000);
}
