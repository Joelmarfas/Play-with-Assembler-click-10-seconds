/* FUNCTION THAT COUNTS THE CLICKS ON PRESSING CLICK ME BUTTON */

let clickMain = document.getElementById("click_hard");
clickMains.addEventListener("click", countClicks);

var click_hard = 0;
function countClicks() {
  click_hard += 1;
  document.getElementById("click_hard").innerHTML = clicks_hard;
}

// PRESSING START GAME MAKES ITSELF HIDE AND 'CLICK_hard' BUTTON APPEAR
let startGames = document.getElementById("start_Game");
startGame.addEventListener("click", hideGg);
function hideGg() {
  startGames.classList.add("is_hidden");
  clickMains.classList.remove("is_hidden");
  setTimeout(function () {
    alert("Your time is up!!!!!");
  }, 10000);
}
