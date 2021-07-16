// Variable Declaration
let gameContainer=document.getElementById("game_container")
let startButton = document.getElementById("start_button");
let userNameContainer = document.getElementById("username_container");
let levelSelection = document.getElementById("level_selection");
let userNameInput = document.getElementById("username");
let alertBox = document.getElementById("alert_box");
let validUserName;

let userName;

// EVENT LISTENERS

userNameInput.addEventListener("input", invalidUsername);
startButton.addEventListener("click", continues);

// FUNCTIONS

function invalidUsername(e){
    
    if(userNameInput.value === "" || userNameInput.value === null){
        alertBox.innerHTML="Please introduce an UserName"
        validUserName=false;
    }
    else if(!e.target.validity.valid ){
        alertBox.innerHTML="Please use only letters or numbers"
        validUserName=false;
    }
    else{
        alertBox.innerHTML=null
        validUserName = true;
    }
}

function continues(e){
    
    if(validUserName===true){

        let lastResult = document.getElementById("last_result");
		let currentlyPlaying = document.getElementById("currently_playing");


        userName=userNameInput.value;
        
        userNameContainer.classList.add("is_hidden");
        levelSelection.classList.remove("is_hidden");
        lastResult.classList.add('is_hidden');
		currentlyPlaying.classList.remove("is_hidden");

        
    }

}
