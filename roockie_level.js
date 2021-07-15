let clickMain = document.getElementById('click_rookie');
clickMain.addEventListener('click', countClicks);

var clicks = 0;
function countClicks() {
	clicks += 1;
	document.getElementById('clicks').innerHTML = clicks;
}

// PRESSING START GAME MAKES ITSELF HIDE AND 'CLICK_ROOKIE' BUTTON APPEAR
let startGame = document.getElementById('start_G');
startGame.addEventListener('click', hideG);
function hideG() {
	startGame.classList.add('is_hidden');
	clickMain.classList.remove('is_hidden');
	setTimeout(function () {
		alert('Your time is up!!!!!');
	}, 10000);
}
