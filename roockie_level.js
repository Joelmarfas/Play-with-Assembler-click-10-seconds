/* FUNCTION THAT COUNTS THE CLICKS ON PRESSING CLICK ME BUTTON */

let clickMain = document.getElementById('click_roockie');
clickMain.addEventListener('click', countClicks);
var counted = [];
var clicks = 0;
function countClicks() {
	clicks += 1;
	counted = document.getElementById('clicks').innerHTML = clicks;
}
console.log(counted);

// PRESSING START GAME MAKES ITSELF HIDE AND 'CLICK_ROOKIE' BUTTON APPEAR
let gameOver = document.getElementById('gameOver')
let startGame = document.getElementById('start_G');
let yourScore = document.getElementById('span_clicks')

startGame.addEventListener('click', hideG);

function hideG() {
	startGame.classList.add('is_hidden');
  clickMain.classList.remove('is_hidden');
  span_clicks.classList.add('is_hidden')
		setTimeout(function () {
      alert('Your time is up!!!!!')
      if (alert) {
        gameOver.classList.remove('is_hidden')
        yourScore.classList.remove('is_hidden')
        clickMain.classList.add('is_hidden');
        yourScore = clicks
      }
    }, 3000);  
	}

