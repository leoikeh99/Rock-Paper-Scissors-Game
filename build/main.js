var rulesBtn = $(".button");
var rules = $(".rules");
var overlay = $(".overlay");
var rock = $(".RK");
var scissors = $(".SC");
var paper = $(".PA");
var outerBorder = $(".after .player .outerBorder");
var outerBorderComp = $(".after .computer .outerBorderComp");
var img = $(".after .player .innerBorder .img");
var compAction = $(".after .computer .innerBorder .img");
var compImg = $(".after .computer .image");
var after = $(".after");
var mid = $(".after .mid");
var result = document.querySelectorAll(".result");
var scoreText = document.getElementById("score");
var score = 0;
var playAgain = document.querySelectorAll(".playAgain");
var compWin = $(".player-win");
var compWin = $(".comp-win");

const randPlay = (compAction, compImg, outerBorderComp) => {
  var play = ["rock", "paper", "scissors"];
  var rand = play[Math.floor(Math.random() * 3)];
  if (rand === "rock") {
    outerBorderComp.removeClass("paper");
    outerBorderComp.removeClass("scissors");
    outerBorderComp.addClass("rock");
    compAction.html(`<img src="images/icon-rock.svg" alt="" />`);
    compImg.css("animationName", "show");
  } else if (rand === "paper") {
    outerBorderComp.removeClass("rock");
    outerBorderComp.removeClass("scissors");
    outerBorderComp.addClass("paper");
    compAction.html(`<img src="images/icon-paper.svg" alt="" />`);
    compImg.css("animationName", "show");
  } else if (rand === "scissors") {
    outerBorderComp.removeClass("paper");
    outerBorderComp.removeClass("rock");
    outerBorderComp.addClass("scissors");
    compAction.html(`<img src="images/icon-scissors.svg" alt="" />`);
    compImg.css("animationName", "show");
  }
  after.css("animationName", "width");
  mid.css("animationName", "show");
  return rand;
};

const userPlay = (type) => {
  var dir = `images/icon-${type}.svg`;
  $("main").css("display", "none");
  $(".after").css("display", "block");
  outerBorder.addClass(type);
  if (type === "rock") {
    outerBorder.removeClass("scissors");
    outerBorder.removeClass("paper");
  } else if (type === "paper") {
    outerBorder.removeClass("scissors");
    outerBorder.removeClass("rock");
  } else if (type === "scissors") {
    outerBorder.removeClass("paper");
    outerBorder.removeClass("rock");
  }
  img.html(`<img src=${dir} alt="" />`);
};

const compare = (userPlay, randPlay) => {
  console.log(userPlay, "   ", randPlay);
  if (userPlay === "rock" && randPlay === "scissors") {
    score++;
    scoreText.textContent = `${score}`;
    $(".player-win").css("animationName", "show");
    $(".comp-win").css("animationName", "none");
    return "YOU WIN";
  } else if (userPlay === "scissors" && randPlay === "paper") {
    score++;
    scoreText.textContent = `${score}`;
    $(".player-win").css("animationName", "show");
    $(".comp-win").css("animationName", "none");
    return "YOU WIN";
  } else if (userPlay === "paper" && randPlay === "rock") {
    score++;
    scoreText.textContent = `${score}`;
    $(".player-win").css("animationName", "show");
    $(".comp-win").css("animationName", "none");
    return "YOU WIN";
  } else if (userPlay === "rock" && randPlay === "paper") {
    score--;
    scoreText.textContent = `${score}`;
    $(".comp-win").css("animationName", "show");
    $(".player-win").css("animationName", "none");
    return "YOU LOSE";
  } else if (userPlay === "paper" && randPlay === "scissors") {
    score--;
    scoreText.textContent = `${score}`;
    $(".comp-win").css("animationName", "show");
    $(".player-win").css("animationName", "none");
    return "YOU LOSE";
  } else if (userPlay === "scissors" && randPlay === "rock") {
    score--;
    scoreText.textContent = `${score}`;
    $(".comp-win").css("animationName", "show");
    $(".player-win").css("animationName", "none");
    return "YOU LOSE";
  } else if (userPlay === randPlay) {
    $(".comp-win").css("animationName", "none");
    $(".player-win").css("animationName", "none");
    score = score;
    scoreText.textContent = `${score}`;
    return "TIE";
  }
};

rulesBtn.click(() => {
  rules.css("animationName", "drop");
  overlay.css("display", "block");
});

$(".close").click(() => {
  rules.css("animationName", "slideUp");
  overlay.css("display", "none");
});

rock.click(() => {
  scoreText.style.opacity = "0";
  scoreText.style.animationName = "show";
  userPlay("rock");
  var comp = randPlay(compAction, compImg, outerBorderComp);
  var text = `${compare("rock", comp)}`;
  result[0].textContent = text;
  result[1].textContent = text;
});

scissors.click(() => {
  scoreText.style.opacity = "0";
  scoreText.style.animationName = "show";
  userPlay("scissors");
  var comp = randPlay(compAction, compImg, outerBorderComp);
  var text = `${compare("scissors", comp)}`;
  result[0].textContent = text;
  result[1].textContent = text;
});

paper.click(() => {
  scoreText.style.opacity = "0";
  scoreText.style.animationName = "show";
  userPlay("paper");
  var comp = randPlay(compAction, compImg, outerBorderComp);
  var text = `${compare("paper", comp)}`;
  result[0].textContent = text;
  result[1].textContent = text;
});

playAgain[0].addEventListener("click", () => {
  scoreText.style.animationName = "none";
  scoreText.style.opacity = "1";
  $("main").css("display", "block");
  $(".after").css("display", "none");
  console.log("yes");
});

playAgain[1].addEventListener("click", () => {
  scoreText.style.animationName = "none";
  scoreText.style.opacity = "1";
  $("main").css("display", "block");
  $(".after").css("display", "none");
  console.log("yes");
});

console.log(playAgain[0]);
