var userScore = 0;
var computerScore = 0;
var drawScore = 0;
const userScore_p = document.getElementById('user-score');
const computerScore_p = document.getElementById('computer-score');
const drawScore_p = document.getElementById('draw-score');
const results_div = document.querySelector('#results');
const comment_div = document.querySelector('#comment');
const rock_btn = document.getElementById('user-rock');
const paper_btn = document.getElementById('user-paper');
const scissors_btn = document.getElementById('user-scissors');
const compRock_btn = document.getElementById('comp-rock');
const compPaper_btn = document.getElementById('comp-paper');
const compScissors_btn = document.getElementById('comp-scissors');
const start_div = document.getElementById('start-container');
const start_btn = document.getElementById('start-button');
const head_div = document.getElementById('head');
const end_div = document.getElementById('end-container');
const again_btn = document.getElementById('again-btn');
const user_img = document.getElementById('merlin-img');
const computer_img = document.getElementById('morgana-img');
var buttons_btn = document.querySelector('.select-button');
const merlin_img = document.getElementById('merlin-img');
const morgana_img = document.getElementById('morgana-img');
const merlin_div = document.getElementById('merlin');
const morgana_div = document.getElementById('morgana');

// Function to play enter button audio on click
function playEnter() {
    const buttonEnter = document.querySelector('#enter');
    buttonEnter.play();
}
start_btn.addEventListener('click', playEnter);

// Function to hide again button
function hideContent() {
    again_btn.style.display = 'none';
}
hideContent();

// FADE EFFECTS
// FadeOut effect for the start-container
function fadeOutStart() {
    var fadeTarget = document.getElementById("start-container");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '2s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeIn effect for the head
function fadeInHead() {
    var fadeTarget = document.getElementById("head");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0;
        }
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.transition = '3s';
            fadeTarget.style.opacity += 1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeOut effect for the head
function fadeOutHead() {
    var fadeTarget = document.getElementById("head");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '1s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeOut effect for the merlin
function fadeOutMerlin() {
    var fadeTarget = document.getElementById("merlin");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '1s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeOut effect for the morgana
function fadeOutMorgana() {
    var fadeTarget = document.getElementById("morgana");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '1s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeOut effect for the merlin-res, morgana-res, and draw-res
function fadeOutMerlinRes() {
    var fadeTarget = document.getElementById("merlin-res");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '1s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

function fadeOutMorganaRes() {
    var fadeTarget = document.getElementById("morgana-res");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '1s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

function fadeOutDrawRes() {
    var fadeTarget = document.getElementById("draw-res");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '1s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeOut effect for the buttons
function fadeOutButtons() {
    var fadeTarget = document.querySelector('.buttons');
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = '2s';
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeIn effect for the end-container
function fadeInEnd() {
    var fadeTarget = document.getElementById("end-container");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0;
        }
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.transition = '3s';
            fadeTarget.style.opacity += 1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}


// FadingOut the start-container and FadingIn the end-container
document.getElementById("start-container").addEventListener('click', () => {
    fadeOutStart();
    window.setTimeout(function() {
        fadeInEnd();
        fadeInHead();
        start_div.style.display = 'none';
    }, 8000);
});

// Random computer choice
function getComputerChoice(){
    const number = (Math.floor(Math.random() * 3));
    
    if (number == 1) {
        return('rock');
    } else if (number == 2) {
        return('paper');
    } else {
        return('scissors');
    }
}

// Function to play win audion on click
function playSelect() {
    const selectSound = document.getElementById('select');
    selectSound.currentTime = 0;
    selectSound.play();
}

// Function to play win audio on winning a round
function playWin() {
    const winSound = document.getElementById('win');
    winSound.currentTime = 0;
    winSound.play();
}

// Function to play loss audio on losing a round
function playLoss() {
    const lossSound = document.getElementById('loss');
    lossSound.currentTime = 0;
    lossSound.play();
}

// Function to play winner audio on winning the game
function playWinner() {
    const winnerSound = document.getElementById('winner');
    winnerSound.currentTime = 0;
    winnerSound.play();
}

// Function to play loser audio on losing the game
function playLoser() {
    const loserSound = document.getElementById('loser');
    loserSound.currentTime = 0;
    loserSound.play();
}

// Function to play draw audio on tie game
function playDraw() {
    const drawSound = document.getElementById('draw');
    drawSound.currentTime = 0;
    drawSound.play();
}

// If the User wins
function win(userChoice, computerChoice) {
    userScore++;
    userScore_p.innerHTML = userScore;
    computerScore_p.innerHTML = computerScore;
    // playWin();
    removeLoseShadow();
    user_img.classList.add('win-color');
    computer_img.classList.add('lose-color');
    comment_div.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ". You Win!";
}

// If the User loses
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_p.innerHTML = computerScore;
    userScore_p.innerHTML = userScore;
    // playLoss();
    removeWinShadow();
    user_img.classList.add('lose-color');
    computer_img.classList.add('win-color');
    comment_div.innerHTML = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + ". You Lose!";
}


// If it's a tie
function draw() {
    drawScore++;
    drawScore_p.innerHTML = drawScore;
    removeWinShadow();
    removeLoseShadow();
    comment_div.innerHTML = "That was a draw. Try again.";
}

// Function to compare users and computers choices
function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice == 'rock' && computerChoice == 'scissors') {
        win(userChoice, computerChoice);
        computerColor(computerChoice);
        playRound(userScore, computerScore);
        return "win";
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        win(userChoice, computerChoice);
        computerColor(computerChoice);
        playRound(userScore, computerScore);
        return "win";
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        win(userChoice, computerChoice);
        computerColor(computerChoice);
        playRound(userScore, computerScore);
        return "win";
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        lose(userChoice, computerChoice);
        computerColor(computerChoice);
        playRound(userScore, computerScore);
        return "lose";
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        lose(userChoice, computerChoice);
        computerColor(computerChoice);
        playRound(userScore, computerScore);
        return "lose";
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        lose(userChoice, computerChoice);
        computerColor(computerChoice);
        playRound(userScore, computerScore);
        return "lose";
    } else {
        draw();
        computerColor(computerChoice);
        playRound(userScore, computerScore);
        return "draw";
    }
    
}

// Function to decide who's the winner
function playRound(userScore, computerScore, drawScore) {
    if (userScore == 5 || computerScore == 5 || drawScore > 5) {
        if (userScore > computerScore) {
            comment_div.innerHTML = "You did it! You saved Albion!";
            comment_div.classList.add('winner-comment');
            disableButtons();
            window.setTimeout(function() {
                again_btn.style.display = 'inline';
                again_btn.classList.add('computerPick');
            }, 2000);
            fadeOutHead();
            fadeOutButtons();
            fadeOutMorgana();
            fadeOutMerlinRes();
            fadeOutMorganaRes();
            fadeOutDrawRes();
            playWinner();
            merlin_img.classList.add('merlin-win');
            again_btn.classList.add('end-again');
            comment_div.classList.add('end-comment');
        } else if (computerScore > userScore) {
            comment_div.innerHTML = "You lost. Morgana threw a dark curse on Albion!";
            comment_div.classList.add('loser-comment');
            disableButtons();
            window.setTimeout(function() {
                again_btn.style.display = 'inline';
                again_btn.classList.add('computerPick');
            }, 2000);
            fadeOutHead();
            fadeOutButtons();
            fadeOutMerlin();
            fadeOutMerlinRes();
            fadeOutMorganaRes();
            fadeOutDrawRes();
            playLoser();
            morgana_img.classList.add('morgana-win');
            again_btn.classList.add('end-again');
            comment_div.classList.add('end-comment');
        } else if (drawScore > 5 ) {
            if (userScore == computerScore) {
                comment_div.innerHTML = "That was close! You managed to hold her back!";
                comment_div.classList.add('draw-comment');
                disableButtons();
                window.setTimeout(function() {
                    again_btn.style.display = 'inline';
                    again_btn.classList.add('computerPick');
                }, 2000);
                fadeOutMerlinRes();
                fadeOutMorganaRes();
                fadeOutDrawRes();
                playDraw();
                comment_div.classList.add('end-comment');
            }
        }
    }
}


// Add function to Users buttons
function main() {
    rock_btn.addEventListener('click', function() {
        playSelect();
        game("rock");
    });

    paper_btn.addEventListener('click', function() {
        playSelect();
        game("paper");
    });

    scissors_btn.addEventListener('click', function() {
        playSelect();
        game("scissors");
    });
}

main();

// Adding animation to the Computer's "Button"
function computerColor(computerChoice) {
    if (computerChoice === 'rock') {
            removeColor();
            compRock_btn.style.opacity = 1;
            compRock_btn.classList.add('computerPick');
            window.setTimeout(function() {
                compRock_btn.style.opacity = 0;
            }, 1000);
    }
    if (computerChoice === 'paper') {
            removeColor();
            compPaper_btn.style.opacity = 1;
            compPaper_btn.classList.add('computerPick');
            window.setTimeout(function() {
                compPaper_btn.style.opacity = 0;
            }, 1000);
    }
    if (computerChoice === 'scissors') {
            removeColor();
            compScissors_btn.style.opacity = 1;
            compScissors_btn.classList.add('computerPick');
            window.setTimeout(function() {
                compScissors_btn.style.opacity = 0;
            }, 1000);
    }
}

// Removing color from the Computer's "Button"
function removeColor() {
    compRock_btn.classList.remove('computerPick');
    compPaper_btn.classList.remove('computerPick');
    compScissors_btn.classList.remove('computerPick');
}

// Removing box-shadow from avatars

function removeWinShadow() {
    user_img.classList.remove('win-color');
    computer_img.classList.remove('lose-color');
}

function removeLoseShadow() {
    user_img.classList.remove('lose-color');
    computer_img.classList.remove('win-color');
}

function disableButtons() {
    rock_btn.disabled = true;
    paper_btn.disabled = true;
    scissors_btn.disabled = true;
}

function enableButtons() {
    rock_btn.disabled = false; 
    paper_btn.disabled =  false;
    scissors_btn.disabled = false; 
}