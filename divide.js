const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audioWrong = document.getElementById("myAudioWrong");
const audioRight = document.getElementById("myAudioRight");
var answer = 0;
let userScore = 0;
const userScoreDisplay = document.getElementById("scoreCounter");

function generateEquation() {
  var num1 = Math.ceil(Math.random() * 10);
  var num2 = Math.ceil(Math.random() * 2);
  var dummy1 = Math.floor(Math.random() * 5);
  var dummy2 = Math.floor(Math.random() * 5);
  var allAnswers = [];
  var switchAnswers = [];

  answer = num1 / num2;

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allAnswers = [answer, dummy1, dummy2];

  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    audioRight.play();
    generateEquation();
    getUserScore();
  } else {
    audioWrong.play();
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    audioRight.play();
    generateEquation();
    getUserScore();
  } else {
    audioWrong.play();
  }
});

option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    audioRight.play();
    generateEquation();
    getUserScore();
  } else {
    audioWrong.play();
  }
});

generateEquation();

function getUserScore() {
  userScore++;
  userScoreDisplay.innerHTML = `  ${userScore}`;
}
