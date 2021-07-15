
// FUNCTION THAT STARTS THE GAME

startRoockie.addEventListener('click', hideG);

function hideG() {
	startRoockie.classList.add('is_hidden');
	clickRoockie.classList.remove('is_hidden');
	
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
			clickRoockie.classList.add('is_hidden');
			lastResult.classList.remove('is_hidden');
			currentlyPlaying.classList.add("is_hidden");


			

		}, 3000);
}

// FUNCTION THAT COUNTS THE CLICKS ON PRESSING HIT ME HARD BUTTON

clickRoockie.addEventListener('click', countClicks);


function countClicks() {
	counter += 1;
	document.onkeydown = function (e) {
		if (e.target === 32) {  //  USED 'Target' BECAUSE 'KeyCode' IS DEPRECATED
			clickRoockie.click();
		}
	}
}




