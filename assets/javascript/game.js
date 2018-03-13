// create a list of words
var colors = ["red", "green", "blue", "orange", "purple", "yellow", "grey", "violet", "turquoise", "magenta", "cyan", "brown", "peach", "teal", "pink"];
var underScores = [];
var wins = 0;
var lives = " " + 6;
var wrongLetter = [];
var userGuesses = [];
var randomWord  = [];
var correct = 0;
// randomly select a word from the list

function starterGame(){
    underScores = [];
    randomWord = colors[Math.floor(Math.random() * colors.length)];
    console.log('random Word =' + randomWord.toUpperCase());
    
    for (var i = 0; i < randomWord.length; i++)
    {
        underScores.push(" _ ");
    }
    document.getElementById("mywins").innerHTML = " " + " " + wins;
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
    replacingImage6();
    starterGame();
}
function replacingImage6()
    {
        document.getElementById("hmImage").src="assets/images/hangman1.png";
    }
function replacingImage5()
    {
        document.getElementById("hmImage").src="assets/images/hangman2.png";
    }
function replacingImage4()
    {
        document.getElementById("hmImage").src="assets/images/hangman3.png";
    }
function replacingImage3()
    {
        document.getElementById("hmImage").src="assets/images/hangman4.png";
    }
function replacingImage2()
    {
        document.getElementById("hmImage").src="assets/images/hangman5.png";
    }
function replacingImage1()
    {
        document.getElementById("hmImage").src="assets/images/hangman6.png";
    }
function replacingImage0()
    {
        document.getElementById("hmImage").src="assets/images/hangman7.png";
    }

function timeOutImg()
{
    document.getElementById("loser").style.display = "inline-block";
}


document.onkeyup = function (event)
{
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
    //userGuesses = event.key.toUpperCase();
    userGuesses = event.key
    
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
     if(lives > 1 && lives == 6)
     {
        lives--;
        replacingImage5();
     }
     else if(lives > 1 && lives == 5)
     {
        lives--;
        replacingImage4();
     }
     else if(lives > 1 && lives == 4)
     {
        lives--;
        replacingImage3();
     }
     else if(lives > 1 && lives == 3)
     {
        lives--;
        replacingImage2();
     }
     else if(lives > 1 && lives == 2)
     {
        lives--;
        replacingImage1();
     }
     else {
        lives--;
        //window.setTimeout(replacingImage0(), 6000);
        replacingImage0();
        //setTimeout(replacingImage0(), 3000);
        //window.setTimeout(timeOutImg(), 3000);
        document.getElementById("loser").style.display = "inline-block";
     }
     document.getElementById("mylives").innerHTML = " " + " " + lives;
     document.getElementById("guessed").innerHTML = " " + " " + wrongLetter.join(" ");
    }
}


//document.getElementById("loser").style.display = "inline-block";
starterGame();

// show the empty spaces for each letter with underscores

// listen for keys pressed and record wrong or cerrect letters

// 