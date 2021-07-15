//  VARIABLES



// FUNCTION THAT STARTS THE GAME

roockieStart.addEventListener('click', hideG);

function hideG() {
	roockieStart.classList.add('is_hidden');
	clickRoockie.classList.remove('is_hidden');

	setTimeout(function () {
		counter = clicks;
		ranking.push({ Username: userName, Score: counter });
		finalScoreCont.classList.remove('is_hidden');
		clickRoockie.classList.add('is_hidden');
	}, 3000);
}

// FUNCTION THAT COUNTS THE CLICKS ON PRESSING HIT ME HARD BUTTON

clickRoockie.addEventListener('click', countClicks);

var clicks = 0;
function countClicks() {
	clicks += 1;
	document.onkeydown = function (e) {
		if (e.target === 32) {
			//  USED 'Target' BECAUSE 'KeyCode' IS DEPRECATED
			clickRoockie.click();
		}
	};
}
