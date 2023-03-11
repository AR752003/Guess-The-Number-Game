let ComputerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

let audio = new Audio("effects.wav");

let flag=false;

const init = () => {
    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById('newGameButton').style.display = "none";
    document.getElementById('gameArea').style.display = "none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById('gameArea').style.display = "block";
}

//reload the page

const newGameBegin = () => {
    audio.play();
    window.location.reload();
}

// start new game

const startNewGame = () => {
    document.getElementById('newGameButton').style.display = "inline";
    userNumberUpdate.setAttribute('disabled',true);
    
    // MY own code

    // document.getElementById('newGameButton').onclick = () =>{
    //     init();
    //     startGame();
    //     userNumberUpdate.removeAttribute('disabled',true)
    //     document.getElementById("attempts").innerHTML = '0';
    //     document.getElementById("guesses").innerHTML = "";
    //     userGuess = []
    // }
}

const compareGuess = () => {
    audio.play()
    const userNumber = Number(document.getElementById('inputBox').value);
    userGuess = [...userGuess,userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    // check the value low or high
    if(userNumber>computerGuess)
    {
        userGuessUpdate.innerHTML = "Your guess is too high 😲" ;
        userNumberUpdate.value = "";
    }
    else if(userNumber<computerGuess)
    {
        userGuessUpdate.innerHTML = "Your guess is too low 🥹" ;
        userNumberUpdate.value = "";
    }
    else{
        userGuessUpdate.innerHTML = "It's Correct!! 😀" ;
        userNumberUpdate.value = "";
        flag=true;
    }

    document.getElementById("attempts").innerHTML = userGuess.length
    if(userGuess.length>=maxGuess && flag==false)
    {
        document.getElementById("textOutput").innerHTML = `YOU LOOSE!!😔 The correct Number was ${computerGuess}`; 
    }
    if(userGuess.length>=maxGuess || flag==true)
    {   
        
        startNewGame();
        flag=false;
    }


};

const easyMode = () => {
    audio.play()
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play()
    maxGuess = 5;
    startGame();
};




