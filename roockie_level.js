//  VARIABLES 

let clickMain = document.getElementById('click_roockie');
let gameOver = document.getElementById('gameOver');
let startGame = document.getElementById('start_G');
let yourScore = document.getElementById('span_clicks');
let user = document.getElementById('username');
let yourValue = document.getElementById('clicks');
let finalScoreContainer = document.getElementById('final_score_container');

// FUNCTION THAT STARTS THE GAME

startGame.addEventListener('click', hideG);

function hideG() {
	startGame.classList.add('is_hidden');
	clickMain.classList.remove('is_hidden');
	span_clicks.classList.add('is_hidden');
	setTimeout(function () {
	/* 	alert('Your time is up!!!!!');
	/* 	if (alert) { */ 
		/* 	gameOver.classList.remove('is_hidden');
			yourScore.classList.remove('is_hidden'); */
			finalScoreContainer.classList.remove('is_hidden')
			clickMain.classList.add('is_hidden');
			yourScore = clicks;
		}, 3000);
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
	if (e.target === 32) {  //  USED 'Target' BECAUSE 'KeyCode' IS DEPRECATED
		clickMain.click();
	}
};

// FUNCTION TO STORE INPUT + SCORE INTO JS OBJECTS


let results = [];

const addResults = (ev) =>
{
	ev.preventDefault() // TO STOP THE FORM SUBMITTING
	let score = {

		username: user.value, // OR SHOULD WE USE :  document.getElementById('username').value       ???????
		points: yourValue
	};

	results.push(score);
	console.warn('added', { results });
}
document.addEventListener('DOMContentLoaded', () =>
{
	document.getElementById('start_button').addEventListener('click', addResults)
});

