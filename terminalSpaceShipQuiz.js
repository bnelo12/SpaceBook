// Enter Questions in Array Below VVV
var shipQuiz = [
    // Enter first one manually too in html 
    {question:'What shape are black holes?', answer:"spherical", wrong:"funnel-shaped" }, 
    {question:'The asteroid belt is dangereous for our spaceships', answer:"No", wrong:"Yes" },
    {question:'There is no gravity in space', answer:"No", wrong:"Yes" },
    {question:'Jupiter circles the sun ', answer:"No", wrong:"Yes" },
    {question:'The earth is a perfect sphere', answer:"No", wrong:"Yes" },
    {question:'We will freeze if exposed to space', answer:"No", wrong:"Yes" },
    {question:'There can be fires/explosions in space', answer:"No", wrong:"Yes" }
];

var muskScore = 0;
var bezosScore = 0;



function correctAnswer(id,crntQ){

    // Adds 1000 to user score and makes button green if correct, else red and add 1000 to Bezos
    
  if (document.getElementById(id).innerHTML === shipQuiz[crntQ].answer){
        document.getElementById(id).style.background='#f44248';
        muskScore+=1000;
        document.getElementById("score-1").innerHTML=muskScore;
     }else{
        document.getElementById(id).style.background='#25e01f';
        bezosScore+=1000;
        document.getElementById("score-2").innerHTML=bezosScore;
    }
 }

 
 function startQuiz(id){
     console.log("click shiy");
    document.getElementById(id).className = "hide";
    document.getElementById('answer-buttons').className = "answer-buttons";
    document.getElementById('quiz-answer-1').className = "-1";
    document.getElementById('quiz-answer-2').className = "-1";
    nextQuestion(id);

}


function nextQuestion(id){

    // finds number of Q (stored in class)
    var currentQuestion = parseInt(document.getElementById('quiz-answer-1').className);

    var time = 0;
    
    if(currentQuestion!=-1){
        correctAnswer(id,currentQuestion);
        time =400;
    }
    
    // waits 400ms before turning button back to normal from red/green
    setTimeout(()=>{
        document.getElementById(id).style.background='transparent'; // set background back to normal
        // if all questions done

       if (shipQuiz.length-1 === currentQuestion){
           // transition to next game

        //    document.getElementById('quiz-answer-1').className = "0";
        //    document.getElementById('quiz-answer-2').className = "0";       
        //    console.log("Bezos Score: "+ bezosScore);
        //    console.log("Musk Score: "+muskScore);
        } else{
            // sets Questions
            document.getElementById('ship-quiz-question').innerHTML = shipQuiz[currentQuestion+1].question;
      
            // alternates between right and wrong answer on left and right
             if (Math.floor(Math.random()*2) == 0){
                document.getElementById('quiz-answer-1').innerHTML = shipQuiz[currentQuestion+1].wrong;
                document.getElementById('quiz-answer-2').innerHTML = shipQuiz[currentQuestion+1].answer;
            }else {
                document.getElementById('quiz-answer-1').innerHTML = shipQuiz[currentQuestion+1].answer;
                document.getElementById('quiz-answer-2').innerHTML = shipQuiz[currentQuestion+1].wrong;
            }
    
           // Increment question count and update this as class
           currentQuestion++; 
           document.getElementById('quiz-answer-1').className = currentQuestion.toString();
           document.getElementById('quiz-answer-2').className = currentQuestion.toString();
            };   
    },time);  
}
    