var currentQuestionBank = 0;
var time =  100 ;
var timeLimitId;

const start = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");
const question = document.getElementById("questions");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

//questions
var questions = [
    {
        question : "Which data type is used to create a variable that should store text?",
        choiceA: "myString",
        choiceB: "Txt",
        choiceC: "String",
        correct: "C"
    },
    
    {
        question : "Java is short for 'JavaScript'",
        choiceA: "TRUE",
        choiceB: "FALSE",
        correct: "A" 
    },

    {
        question : "How do you create a method in Java?",
        choiceA: "methodName()",
        choiceB: "(methodName)",
        choiceC: "methodName.",
        correct: "A"   
    },

    {
        question : "Which keyword is used to create a class in Java?",
        choiceA: "class()",
        choiceB: "class",
        choiceC: "className",
        correct: "B"   
    },

    {
        question : "How do you create a method in Java?",
        choiceA: "methodName()",
        choiceB: "(methodName)",
        choiceC: "methodName.",
        correct: "A"  
    },
];

// when btn is clicked timer starts and questions are presented
var displayQuestion = document.getElementById('start-btn');
    displayQuestion.addEventListener('click', function() {
        var div = document.getElementById('quiz');
    });

function startQuiz(){
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}


// answer is correct
function answerIsCorrect(){
}

// answer is Wrong subtract 10 seconds
function answerIsWrong(){
}

// function to end the quiz
function stopQuiz() {

}

