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
const body = document.getElementById('body');


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
// FadeOut
function fadeOutEffect(elId, seconds) {
    var fadeTarget = document.getElementById(elId);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.transition = seconds;
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadeIn
function fadeInEffect(elId, seconds) {
    var fadeTarget = document.getElementById(elId);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0;
        }
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.transition = seconds;
            fadeTarget.style.opacity += 1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}

// FadingOut the start-container and FadingIn the end-container
document.getElementById("start-button").addEventListener('click', () => {
    fadeOutEffect("start-container", '2s');
    window.setTimeout(function() {
        fadeInEffect("end-container", '10s');
        fadeInEffect("head", '10s');
        start_div.style.display = 'none';
    }, 4000);
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
            disableButtons();
            window.setTimeout(function() {
                body.style.marginTop = '50px';
                again_btn.style.display = 'inline';
                again_btn.classList.add('computerPick');
                head_div
            }, 2000);
            removeFadeOut(head_div, 2000);
            removeFadeOut(morgana_div, 2000);
            removeFadeOut(rock_btn, 2000);
            removeFadeOut(paper_btn, 2000);
            removeFadeOut(scissors_btn, 2000);
            removeFadeOut(comment_div, 2000);
            removeFadeOut(results_div, 2000);
            playWinner();
            window.setTimeout(function() {
                body.style.display = 'tablet';
                end_div.style.maxHeight = '100vh';
                end_div.style.display = 'block';
                end_div.style.transition = '20s'
            },2000);
            commentWiner();
            merlin_img.classList.add('merlin-win');
            again_btn.classList.add('end-again');
        } else if (computerScore > userScore) {
            disableButtons();
            window.setTimeout(function() {
                body.style.marginTop = '50px';
                again_btn.style.display = 'inline';
                again_btn.classList.add('computerPick');
            }, 2000);
            removeFadeOut(head_div, 2000);
            removeFadeOut(merlin_div, 2000);
            removeFadeOut(compRock_btn, 2000);
            removeFadeOut(compPaper_btn, 2000);
            removeFadeOut(compScissors_btn, 2000);
            removeFadeOut(comment_div, 2000);
            removeFadeOut(results_div, 2000);
            playLoser();
            window.setTimeout(function() {
                body.style.display = 'tablet';
                end_div.style.maxHeight = '100vh';
                end_div.style.display = 'block';
                end_div.style.transition = '20s'
                morgana_img.style.height = '50%';
            },2000);
            commentLoser();
            morgana_img.classList.add('morgana-win');
            again_btn.classList.add('end-again');
        } else if (drawScore > 5 ) {
            if (userScore == computerScore) {
                disableButtons();
                window.setTimeout(function() {
                    body.style.marginTop = '50px';
                    again_btn.style.display = 'inline';
                    again_btn.classList.add('computerPick');
                }, 2000);
                removeFadeOut(head_div, 2000);
                removeFadeOut(compRock_btn, 2000);
                removeFadeOut(compPaper_btn, 2000);
                removeFadeOut(compScissors_btn, 2000);
                removeFadeOut(comment_div, 2000);
                removeFadeOut(results_div, 2000);
                playDraw();
                window.setTimeout(function() {
                    body.style.display = 'tablet';
                    end_div.style.maxHeight = '100vh';
                    end_div.style.display = 'grid';
                    end_div.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
                    end_div.style.gridTemplateRows = '1fr 1fr';
                    merlin_img.style.height = '50%';
                    morgana_img.style.height = '50%';
                    end_div.style.gridRowGap = '30px';
                    merlin_img.style.gridColumn = '1/3';
                    morgana_img.style.gridColumn = '3/5';
                    end_div.style.transition = 'all 3s ease-in';
                },2000);
                commentDraw();
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

// Function to remove elements
function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+ seconds +"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

// Function to create the end comment
function commentWiner(){
    window.setTimeout(function() {
        var endComment = document.createElement('div');
        var node = document.createTextNode('You did it! You saved Albion!');
        endComment.setAttribute('id', 'winner-comment');
        endComment.appendChild(node);
        merlin_div.appendChild(endComment);
        fadeInEffect('winner-comment', '3s');
    }, 2000);
}

function commentLoser(){
    window.setTimeout(function() {
        var endComment = document.createElement('div');
        var node = document.createTextNode('You lost. Morgana threw a dark curse on Albion!');
        endComment.setAttribute('id', 'loser-comment');
        endComment.appendChild(node);
        morgana_div.appendChild(endComment);
        fadeInEffect('loser-comment', '3s');
    }, 2000);
}

function commentDraw(){
    window.setTimeout(function() {
        var endComment = document.createElement('div');
        var node = document.createTextNode('That was close! You managed to hold her back!');
        endComment.setAttribute('id', 'draw-comment');
        endComment.appendChild(node);
        end_div.appendChild(endComment);
        fadeInEffect('draw-comment', '3s');
    }, 2000);
}

