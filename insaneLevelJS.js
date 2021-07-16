
// VARIABLES DECLARATION



let finalScoreCont = document.getElementById("final_score_container");

let counter=0;
let insaneScore;


// EVENT LISTENERS
insaneStart.addEventListener("click", switchButton);
insaneClick.addEventListener("click", movement);
insaneClick.addEventListener("click", counting);

// FUNCTIONS



function switchButton(){
    
    insaneStart.classList.add("is_hidden");
    insaneClick.classList.remove("is_hidden");

     setTimeout(function(){
        let currentScore = document.getElementById("current_score");
		currentScore.innerHTML=counter;
		let lastScore = document.getElementById("last_score");
		lastScore.innerHTML = counter;
        let lastResult = document.getElementById("last_result");
		let currentlyPlaying = document.getElementById("currently_playing");
        
        ranking.push({Username: userName, Score: counter})
        
        insaneLvl.classList.add("is_hidden");
        finalScoreCont.classList.remove("is_hidden");
        lastResult.classList.remove('is_hidden');
		currentlyPlaying.classList.add("is_hidden");
    
    },10000)
        console.log(ranking)
    }



function movement(){
    
        let btnWidth = insaneClick.getBoundingClientRect().width;
        let btnHeight = insaneClick.getBoundingClientRect().height;

        let contWidth = gameContainer.getBoundingClientRect().width;
        let contHeight = gameContainer.getBoundingClientRect().height;

        let x = (Math.random() * (contWidth - btnWidth)).toFixed();
        let y = (Math.random() * (contHeight - btnHeight)).toFixed();

        insaneClick.style.left = x +'px';
        insaneClick.style.top = y +'px';

}

function counting(){
        counter+=3    
}