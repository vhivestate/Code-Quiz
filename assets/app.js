var intro = document.getElementById("intro");
var start = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var questionBox = document.getElementById("questionBox");
var quizQuestion = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var countdown = document.getElementById("countdown");
var score = 0;
var timer;
var timerCounter = 60;

// setting the quizbox div to be hidden until the start quiz button is clicked
questionBox.style.display = "none";
countdown.style.display = "none";

//questions
var questionsList = [
    {
        question : "Which data type is used to create a variable that should store text?",
        choiceA: "myString",
        choiceB: "Txt",
        choiceC: "String",
        correctAnswer: "choiceC"
    },
    
    {
        question : "Java is short for 'JavaScript'",
        choiceA: "TRUE",
        choiceB: "FALSE",
        correctAnswer: "choiceA" 
    },

    {
        question : "How do you create a method in Java?",
        choiceA: "methodName()",
        choiceB: "(methodName)",
        choiceC: "methodName.",
        correctAnswer: "choiceA"   
    },

    {
        question : "Which keyword is used to create a class in Java?",
        choiceA: "class()",
        choiceB: "class",
        choiceC: "className",
        correctAnswer: "choiceB"   
    },

    {
        question : "Which method can be used to return a string in upper case letters?",
        choiceA: "toUpperCase()",
        choiceB: "upperCase()",
        choiceC: "Tuc()",
        correctAnswer: "choiceA"  
    },
];

// setting a variable to use as an index value for the questionsList array
var currentQuestion = 0

// when btn is clicked timer starts and questions are presented
//var displayQuestion = document.getElementById('start-btn');
//    displayQuestion.addEventListener('click', function() {
//        var div = document.getElementById('quiz');
//    });

// function that allows the quiz to begin and timer to start 
var quizBegin = function () {
    questionBox.style.display = "block";
    startBtn.style.display = "none";
    countdown.style.display = "block";
    getQuestion();
    timer = setInterval(function () {
        countdown.textContent = "Time Left: " + timerCounter;
        if (timerCounter > 0) {
            timerCounter--
        } else {
            clearInterval(timer)
            getInitials();
            questionBox.style.display = "none"
        }
    }, 1000)
};

// adding an event listener to the start quiz button so it can run the quiz when clicked
startBtn.addEventListener("click", quizBegin);




// function that generates questions using the questionsList array objects and their properties
function getQuestion() {
    quizQuestion.textContent = questionsList[currentQuestion].question;
    choiceA.textContent = questionsList[currentQuestion].choiceA;
    choiceB.textContent = questionsList[currentQuestion].choiceB;
    choiceC.textContent = questionsList[currentQuestion].choiceC;

}

// adding event listeners to the answer buttons
choiceA.addEventListener("click", checkAnswer)
choiceB.addEventListener("click", checkAnswer)
choiceC.addEventListener("click", checkAnswer)


// function that runs when game is over that prompts the user to enter their initials to be used to log highscore
var getInitials = function () {
    var initials = "";
    while (initials === "" || initials == null) {
        initials = prompt("Please enter your initials to log your score.");
    }
    console.log("Your intitials are " + initials);
    countdown.textContent = "Great job " + initials + "! You finished with a score of " + score + " with " + timerCounter + " seconds left! Come back later or refresh the page to try again.";
    localStorage.setItem('Saved Score', initials + score + timerCounter);
}



function checkAnswer() {
    var answerSelection = this.textContent;
    console.log(answerSelection);
    if (answerSelection == questionsList[currentQuestion].correctAnswer) {
        score += 10;
        currentQuestion++
    } else {
        timerCounter -= 5
    }
    if (currentQuestion < questionsList.length - 1) {
        currentQuestion++
        getQuestion();
        console.log(score,)
    }
    else if (currentQuestion == questionsList.length) {
         clearInterval(timer)
         getInitials();
    }
}

