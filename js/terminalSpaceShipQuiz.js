// Enter Questions in Array Below VVV
var shipQuiz = [
    // Enter first one manually too in html
    {question:'What shape are black holes?', answer:"Spherical", wrong:"Funnel-shaped" },
    {question:'The asteroid belt is dangerous for our spaceships', answer:"False", wrong:"True" },
    {question:'There is no gravity in space', answer:"False", wrong:"True" },
    {question:'Jupiter circles the sun ', answer:"False", wrong:"True" },
    {question:'The earth is a perfect sphere', answer:"False", wrong:"True" },
    {question:'We will freeze if exposed to space', answer:"False", wrong:"True" },
    {question:'There can be fires/explosions in space', answer:"False", wrong:"True" }
];
var muskScore = 0;
var bezosScore = 0;

function correctAnswer(id, crntQ) {

  // Adds 1000 to user score and makes button green if correct, else red and add 1000 to Bezos

  if (document.getElementById(id).innerHTML === shipQuiz[crntQ].answer) {
    document.getElementById(id).style.background = '#25e01f';
    muskScore += 1000;
    document.getElementById("score-1").innerHTML = muskScore;
  } else {
    document.getElementById(id).style.background = '#f44248';
    bezosScore += 1000;
    document.getElementById("score-2").innerHTML = bezosScore;
  }
}

function startQuiz(id) {
  document.getElementById(id).className = "hide";
  document.getElementById('answer-buttons').className = "answer-buttons";
  document.getElementById('quiz-answer-1').className = "-1";
  document.getElementById('quiz-answer-2').className = "-1";
  nextQuestion(id);

}

function nextQuestion(id) {

  // finds number of Q (stored in class)
  var currentQuestion = parseInt(document.getElementById('quiz-answer-1').className);

  var time = 0;

  if (currentQuestion != -1) {
    correctAnswer(id, currentQuestion);
    time = 400;
  }

  // waits 400ms before turning button back to normal from red/green
  setTimeout(() => {
    document.getElementById(id).style.background = 'transparent'; // set background back to normal
    // if all questions done

    if (shipQuiz.length - 1 === currentQuestion) {

      document.getElementById('ship-quiz-question').innerHTML = "Great job!";
      document.getElementById('ship-quiz-question').className = "start-button";
      document.getElementById('quiz-answer-1').innerHTML = "Your Score:  " + muskScore;
      document.getElementById('quiz-answer-2').innerHTML = "Space Opponent:  " + bezosScore;

    } else {
      // sets Questions
      document.getElementById('ship-quiz-question').innerHTML = (currentQuestion + 2) + ") " + shipQuiz[currentQuestion + 1].question;

      // alternates between right and wrong answer on left and right
      if (Math.floor(Math.random() * 2) == 0) {
        document.getElementById('quiz-answer-1').innerHTML = shipQuiz[currentQuestion + 1].wrong;
        document.getElementById('quiz-answer-2').innerHTML = shipQuiz[currentQuestion + 1].answer;
      } else {
        document.getElementById('quiz-answer-1').innerHTML = shipQuiz[currentQuestion + 1].answer;
        document.getElementById('quiz-answer-2').innerHTML = shipQuiz[currentQuestion + 1].wrong;
      }

      // Increment question count and update this as class
      currentQuestion++;
      document.getElementById('quiz-answer-1').className = currentQuestion.toString();
      document.getElementById('quiz-answer-2').className = currentQuestion.toString();
    };
  }, time);

  function tryAgain() {


 }
