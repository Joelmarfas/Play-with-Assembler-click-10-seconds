// Variable Declaration

let startButton = document.getElementById("start_button");
let userNameContainer = document.getElementById("username_container");
let levelSelection = document.getElementById("level_selection");
let userName = document.getElementById("username");
let alertBox = document.getElementById("alert_box");
let validUsername;

let regExpUserName = /^[A-Za-z0-9]+$/;

// EVENT LISTENERS

userName.addEventListener("input", invalidUsername);
startButton.addEventListener("click", continues);

// FUNCTIONS

function invalidUsername(e){
    
    if(userName.value === "" || userName.value === null){
        alertBox.innerHTML="Please introduce an UserName"
    }
    else if(!e.target.validity.valid ){
        alertBox.innerHTML="Please use only letters or numbers"
    }
    else{
        alertBox.innerHTML=null
        validUserName = true;
    }
}

function continues(e){
    
    if(validUserName===true){
        userNameContainer.classList.add("is_hidden");
        levelSelection.classList.remove("is_hidden");
    }

}
