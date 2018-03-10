// create a list of words
var colors = ["red", "green", "blue", "orange", "purple", "yellow"];
var underScores = [];
var wins = 0;
var lives = " " + 6;
var guessed = [];
var wrongLetter = [];
var userGuesses = [];
var randomWord;
var winCounter = 0;
// randomly select a word from the list

function starterGame(){
    randomWord = colors[Math.floor(Math.random() * colors.length)];
    console.log('random Word =' + randomWord);
    
    for (var i = 0; i < randomWord.length; i++)
    {
        underScores.push(" _ ");
    }

    document.getElementById("currWord").innerHTML = underScores.join(" ");
    console.log(underScores);
    wrongLetter = []
    lives = " " + 6;

    document.getElementById("mylives").innerHTML = lives;
}

function win()
{
    if (winCounter === randomWord.length)
    {
        alert("Winner");
    }
}


document.onkeyup = function(event)
{
    userGuesses = event.key;
    
    if(randomWord.indexOf(userGuesses) > -1) 
    {
     for(var i = 0; i < randomWord.length; i++)
     {
        if(randomWord[i] === userGuesses)
        {
            underScores[i] = userGuesses;
            console.log(underScores);
            winCounter++;
            win();
        }
        else
        {
           
        }
     }
    }
    else
    {
     wrongLetter.push(userGuesses);
     lives--;
     document.getElementById("mylives").innerHTML = " " + " " + lives;
    }
}

starterGame();

// show the empty spaces for each letter with underscores

// listen for keys pressed and record wrong or cerrect letters

// 