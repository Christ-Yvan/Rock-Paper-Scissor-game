const audio = document.getElementById('song');
const toggleButton = document.getElementById('toggleButton');
const button = document.getElementById('changeBackgroundBtn');
const url = ["https://png.pngtree.com/thumb_back/fh260/background/20230416/pngtree-game-space-fantasy-image_2408888.jpg",
"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/10/hunter-x-hunter-return-confirmed.jpg",
"", 
"https://blog.sklambert.com/wp-content/uploads/2012/09/bg.png"
]
let currentIndexArray = 0;
function onOffSong(){
    if (audio.paused) {
      audio.play();
      toggleButton.textContent = '🔇';
    } else {
      audio.pause();
      toggleButton.textContent = '🔊';
    }
}

function backgroundChanger(){
    document.body.style.backgroundImage = `url(${url[currentIndexArray]})`;
    currentIndexArray = (currentIndexArray + 1) % url.length;
}
toggleButton.addEventListener('click', onOffSong);
button.addEventListener('click', backgroundChanger);

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    
    if(computerResult=="Rock"){
        computerEmoji.innerText = "✊";
    }else if(computerResult=="Paper"){
        computerEmoji.innerText = "✋";
    }else if(computerResult=="Scissors"){
        computerEmoji.innerText = "✌️";
    }

    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  const playerEmoji = document.getElementById("playerEmoji");
  const computerEmoji = document.getElementById("computerEmoji");
  const winner = document.getElementById("resultVideo");
  const looser = document.getElementById("resultVideoW");
  const scoreContainer = document.querySelector(`.score-container`);
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    
  
    if (playerScore === 3) {
      winnerMsgElement.innerText = "Player has won the game!";
      winner.style.display = "block";
      scoreContainer.style.display="none"
      setTimeout(function() {
        winner.style.display = "none";
    }, 35000);
      setTimeout(function(){
        scoreContainer.style.display="flex";
      },35000);
      resultVideo.src = './fichier_video/win.mp4';
      resultVideo.play();
      roundResultsMsg.style.display = "none";
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
    if (computerScore === 3) {
      winnerMsgElement.innerText = "Computer has won the game!";
      looser.style.display = "block";
      scoreContainer.style.display="none"
      setTimeout(function() {
        looser.style.display = "none";
    }, 35000);
      setTimeout(function(){
        scoreContainer.style.display="flex";
      },35000);
      resultVideoW.src = './fichier_video/loose.mp4';
      resultVideoW.play();
      roundResultsMsg.style.display = "none";
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
    
  
  };

  function resetGame() {
    location.reload()
};

  function displayEmoji(){
    playerEmoji.style.animation = "none";
    computerEmoji.style.animation = "none";
    void playerEmoji.offsetWidth; 
    void computerEmoji.offsetWidth;
    playerEmoji.style.animation = "1s linear 0s 1 alternate sun";
    computerEmoji.style.animation = "1s linear 0s 1 alternate moon";

  }

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  playerEmoji.innerText = "✊";
  showResults("Rock");
  displayEmoji();
 

});

paperBtn.addEventListener("click", function () {
  playerEmoji.innerText = "✋";
  showResults("Paper");
  displayEmoji();
  
  
});

scissorsBtn.addEventListener("click", function () {
  playerEmoji.innerText = "✌️"
  showResults("Scissors");
  displayEmoji();
  
});
