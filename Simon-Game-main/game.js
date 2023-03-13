
// Variables
const buttonColour = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
//Start game
$(document).on("keypress", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        setTimeout(() => {
            nextSequence();
        }, 500);
        started = true;
    }
})


//Process
function nextSequence() {
    userClickedPattern = [];
    level++;
    cherr(level);

    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//Cherring
function cherr(level) {
    switch (level) {
        case 5:
            $(".cheer").addClass("cheer");
            $(".cheer").text("You can do it! Come ON!");
            break;
        case 7:
            $(".cheer").text("Your are the Best!");
            break;
        case 10:
            $(".cheer").text("This is your GAME!");
            break;
        case 13:
            $(".cheer").text("You'r the BOOS!");
            break;
        case 15:
            $(".cheer").text("WOOOJOO mode GOD!");
            break;
        default:
            break;
    }
}

//Picking Colors
$(".btn").click(function (event) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1)
})

//Checking matches of sequence
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        playSound("wrong")
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over")

        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        startOver();
    }

}

//ResetGame
function startOver() {
    level = 0;
    gamePattern = [];
    started = false
    console.log(userClickedPattern)
    $(".cheer").text("Do not worry! Try again...")
}






//Extra functions
function playSound(name) {
    let audio = new Audio("soundsTwo/" + name + ".mp3");
    audio.play();
}


function animatePress(currenColour) {
    $("#" + currenColour).addClass("pressed")
    setTimeout(() => {
        $("#" + currenColour).removeClass("pressed");
    }, 100);
}



//Signature
(function signature() {
    $(".signature").text("By Ismael Rosas")
})();



