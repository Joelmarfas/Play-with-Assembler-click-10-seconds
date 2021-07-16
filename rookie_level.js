// ADD EVENT LISTENERS

startRookie.addEventListener('click', hideG);
clickRookie.addEventListener('click', countClicks);
// FUNCTION THAT STARTS THE GAME

function hideG() {
	startRookie.classList.add('is_hidden');
	clickRookie.classList.remove('is_hidden');
	pressBar.classList.remove("is_hidden");
	
	setTimeout(function () {
			let currentScore = document.getElementById("current_score");
			currentScore.innerHTML=counter;
			let lastScore = document.getElementById("last_score");
			lastScore.innerHTML = counter;

			ranking.push({Username:userName, Score: counter});
			
			let lastResult = document.getElementById("last_result");
			let currentlyPlaying = document.getElementById("currently_playing");
			//  SHOW AND HIDE ELEMENTS
			finalScoreCont.classList.remove('is_hidden');
			clickRookie.classList.add('is_hidden');
			lastResult.classList.remove('is_hidden');
			currentlyPlaying.classList.add("is_hidden");
			pressBar.classList.add("is_hidden");

		}, 10000);
}

// FUNCTION THAT COUNTS THE CLICKS ON PRESSING HIT ME HARD BUTTON

function countClicks() {
	counter += 1;
	document.onkeydown = function (e) {
		if (e.target === 32) {  //  USED 'Target' BECAUSE 'KeyCode' IS DEPRECATED
			clickRookie.click();
		}
	}
}
