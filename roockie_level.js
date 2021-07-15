//  VARIABLES 

let clickMain = document.getElementById('click_roockie');
let gameOver = document.getElementById('gameOver');
let startGame = document.getElementById('start_G');
let yourScore = document.getElementById('span_clicks');

// FUNCTION THAT STARTS THE GAME

startGame.addEventListener('click', hideG);

function hideG() {
	startGame.classList.add('is_hidden');
	clickMain.classList.remove('is_hidden');
	span_clicks.classList.add('is_hidden');
	setTimeout(function () {
		alert('Your time is up!!!!!');
		if (alert) {
			gameOver.classList.remove('is_hidden');
			yourScore.classList.remove('is_hidden');
			clickMain.classList.add('is_hidden');
			yourScore = clicks;
		}
	}, 10000);
}

// FUNCTION THAT COUNTS THE CLICKS ON PRESSING HIT ME HARD BUTTON

clickMain.addEventListener('click', countClicks);
var counted = [];
var clicks = 0;
function countClicks() {
	clicks += 1;
	counted = document.getElementById('clicks').innerHTML = clicks;
}


// FUNCTION TO BE ABLE TO USE SPACEBAR TO HIT THE BUTTON

document.onkeydown = function (e) {
	if (e.target === 32) {              //  USED 'Target' BECAUSE 'KeyCode' IS DEPRECATED
		clickMain.click();
	}
};