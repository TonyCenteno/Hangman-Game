// create a list of words
var colors = ["red", "green", "blue", "orange", "purple", "yellow", "gray", "violet", "turquoise", "magenta", "cyan", "brown", "peach", "teal", "pink"];
var underScores = [];
var wins = 0;
var lives = " " + 6;
var wrongLetter = [];
var userGuesses = [];
var randomWord = [];
var correct = 0;
var img = new Image();
var div = document.getElementById("hmImage")
// randomly select a word from the list

function starterGame(){
    underScores = [];
    randomWord = colors[Math.floor(Math.random() * colors.length)];
    console.log('random Word =' + randomWord);
    
    for (var i = 0; i < randomWord.length; i++)
    {
        underScores.push(" _ ");
    }

    document.getElementById("currWord").innerHTML = underScores.join(" ");
    console.log(underScores);
    wrongLetter = [];
    lives = " " + 6;
    userGuesses = [];
    correct = 0;
    
    document.getElementById("guessed").innerHTML = " " + " " + wrongLetter.join(" ");
    document.getElementById("mylives").innerHTML = lives;
}

function win()
{
    if(correct === randomWord.length)
    {
        wins++;
        document.getElementById("winner").style.display = "inline-block";
    }
}

function goback()
{   
    document.getElementById("winner").style.display = "none";
    document.getElementById("loser").style.display = "none";
    starterGame();
}

document.onkeyup = function (event)
{
    userGuesses = event.key;
    
    if(randomWord.indexOf(userGuesses) > -1) 
    {
     for(var i = 0; i < randomWord.length; i++)
     {
        if(randomWord[i] === userGuesses)
        {
            underScores[i] = userGuesses;
            document.getElementById("currWord").innerHTML = underScores.join(" ");
            correct++;        
            win();
        }
     }
    }
    else
    {
     wrongLetter.push(userGuesses);
     console.log(wrongLetter)
     if(lives > 1)
     {
        lives--;
     }
     else
     {
        document.getElementById("loser").style.display = "inline-block";
     }
     document.getElementById("mylives").innerHTML = " " + " " + lives;
     document.getElementById("guessed").innerHTML = " " + " " + wrongLetter.join(" ");
    }
}

document.getElementById("mywins").innerHTML = " " + " " + wins;
starterGame();

// show the empty spaces for each letter with underscores

// listen for keys pressed and record wrong or cerrect letters

// 