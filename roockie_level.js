//  VARIABLES 
let startGame = document.getElementById('start_G');
let clickMain = document.getElementById('click_roockie');
let gameOver = document.getElementById('gameOver');
let yourScore = document.getElementById('span_clicks');
let user = document.getElementById('username');
let counter = document.getElementById('clicks');
let finalScoreContainer = document.getElementById('final_score_container');

// FUNCTION THAT STARTS THE GAME

startGame.addEventListener('click', hideG);

function hideG() {
	startGame.classList.add('is_hidden');
	clickMain.classList.remove('is_hidden');

	setTimeout (function ()
	{
		counter = clicks;
		ranking.push({ Username: userName, Score: counter });
		finalScoreContainer.classList.remove('is_hidden')
		clickMain.classList.add('is_hidden');
			
		}, 3000);
}

// FUNCTION THAT COUNTS THE CLICKS ON PRESSING HIT ME HARD BUTTON

clickMain.addEventListener('clicks', countClicks);
var counted = [];
var clicks = 0;
function countClicks()
{
	clicks += 1;
	counted = document.getElementById('clicks').innerHTML = clicks;
	document.onkeydown = function (e)
	{
		if (e.target === 32) {
			clickMain.click();
		}
	}
}