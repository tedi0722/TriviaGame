$( document ).ready(function() {

    // var gameRunning = false;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeLeft = 15;
    var currentQuestion = -1;
    var userGuess;
    var intervalId;

var questionList = [
    {
        question: "Which U.S. State has the motto “Live Free or Die” on their license plate?",
        choices: ["New Hampshire", "New York", "Colorado", "Kansas"],
        answer: 0
    },
    {
        question: "A fortnight is a unit of time equal to how many days?",
        choices: ["5 Days", "3 Days", "14 Days", "7 Days"],
        answer: 2
    },
    {
        question: "In the game of pool, what is the standard color for the one ball?",
        choices: ["Red", "Yellow", "Orange", "Blue"],
        answer: 1
    },
    {
        question: "When referring to a type of music, what does R&B stand for?",
        choices: ["Rock and Bounce", "Rock and Blues", "Rhythm and Blues", "Rhythm and Bounce"],
        answer: 2
    },
    {
        question: "What is Earth’s largest animal?",
        choices: ["Cat lol", "Colossal Squid", "African Elephant", "Blue Whale"],
        answer: 3
    },
    {
        question: "What is the most popular breed of dog in the United States?",
        choices: ["Poodle", "Husky", "Labrador Retriever", "Shepherd"],
        answer: 2
    },
    {
        question: "How many people have walked on the moon?",
        choices: ["Seven", "Three", "Twelve", "Twenty"],
        answer: 2
    },
    {
        question: "What does the word KARAOKE mean?",
        choices: ["Sing Out Loud", "Empty Orchestra", "Microphone", "Harmony"],
        answer: 1
    },
    {
        question: "What is the English translation for the name of the German automaker Volkswagen?",
        choices: ["Safest Car", "Best Car", "People's Car", "Fastest Car"],
        answer: 2
    },
    {
        question: "What was the first console video game that allowed the game to be saved?",
        choices: ["The Legend of Zelda", "Super Mario", "Pokemon", "Space War"],
        answer: 0
    },
];

// hide button and start game after click
function startBtn () {
    $("#wrapper").hide();
    $("#newGameBtn").hide();
    $("#startBtn").on("click", function (){
        newQA();
        $("#startBtn").hide();
        $("#wrapper").show();
    });  
}

// display questions & answers
function newQA () {
    $("#wrapper").show();
    currentQuestion++;
    timeLeft = 15;
    countDown();
    console.log(currentQuestion);
    // choicesBtn();
    $("#display-question").html("<h3>" + questionList[currentQuestion].question + "</h3>");
    $("#display-choice-a").html("<p>" + questionList[currentQuestion].choices[0] + "</p>");
    $("#display-choice-b").html("<p>" + questionList[currentQuestion].choices[1] + "</p>");
    $("#display-choice-c").html("<p>" + questionList[currentQuestion].choices[2] + "</p>");
    $("#display-choice-d").html("<p>" + questionList[currentQuestion].choices[3] + "</p>");
}

// check if answer is correct
function checkAnswer () {

    if (currentQuestion == 9) {
        if (userGuess === questionList[currentQuestion].answer) {
            $("#wrapper").hide();
            $("#message").show();
            $("#message").html("<h4>" + "CORRECT!" + "</h4>");
            clearInterval(intervalId);
            // currentQuestion++;
            correct++;
            setTimeout(function () {
                $("#wrapper").hide();
                $("#message").hide();
                scores();
            }, 3000);
        }
        else if (userGuess !== questionList[currentQuestion].answer) {
            $("#wrapper").hide();
            $("#message").show();
            $("#message").html("<h4>" + "WRONG!" + "</h4>" + "<h5>" + "Correct Answer:" + "</h5>" + "<h5>" + questionList[currentQuestion].choices[questionList[currentQuestion].answer] + "</h5>");
            clearInterval(intervalId);
            // currentQuestion++;
            incorrect++;
            setTimeout(function () {
                $("#mwrapper").hide();
                $("#message").hide();
                scores();
            }, 3000);
        }
    }

    else if (userGuess === questionList[currentQuestion].answer) {
        $("#wrapper").hide();
        $("#message").show();
        $("#message").html("<h4>" + "CORRECT!" + "</h4>");
        clearInterval(intervalId);
        // currentQuestion++;
        correct++;
        setTimeout(function () {
            $("#message").hide();
            newQA();
        }, 3000);
    }

    else if (userGuess !== questionList[currentQuestion].answer) {
        $("#wrapper").hide();
        $("#message").show();
        $("#message").html("<h4>" + "WRONG!" + "</h4>" + "<h5>" + "Correct Answer:" + "</h5>" + "<h5>" + questionList[currentQuestion].choices[questionList[currentQuestion].answer] + "</h5>");
        clearInterval(intervalId);
        // currentQuestion++;
        incorrect++;
        setTimeout(function () {
            $("#message").hide();
            newQA();
        }, 3000);
    }
}

// // set up decrement value -1
function decrement() {
    timeLeft--;
    $("#time-left").html("<h2>" + "Time Remaining:&nbsp" + "</h2>" + "<h2>" + timeLeft + "</h2>");
    if (timeLeft <= 0) {
        if (currentQuestion == 9) {
            $("#wrapper").hide();
            $("#message").show();
            $("#message").html("<h4>" + "Time's Up!" + "</h4>" + "<h5>" + "Correct Answer:" + "</h5>" + "<h5>" + questionList[currentQuestion].choices[questionList[currentQuestion].answer] + "</h5>");
            clearInterval(intervalId);
        // currentQuestion++;
            unanswered++;
            setTimeout(function () {
                $("#message").hide();
                $("#wrapper").hide();
            scores();
        },3000);
        }

        else {
        $("#wrapper").hide();
        $("#message").show();
        $("#message").html("<h4>" + "Time's Up!" + "</h4>" + "<h5>" + "Correct Answer:" + "</h5>" + "<h5>" + questionList[currentQuestion].choices[questionList[currentQuestion].answer] + "</h5>");
        clearInterval(intervalId);
        // currentQuestion++;
        unanswered++;
        setTimeout(function () {
            $("#message").hide();
            newQA();
        },3000);
    }
    }
}

// // show timeleft
function countDown () {
    intervalId = setInterval(function () {
        decrement();
      }, 1000);
    $("#time-left").html("<h2>" + "Time Remaining:&nbsp" + "</h2>" + "<h2>" + timeLeft + "</h2>");
}

// display scores
function scores () {
        $("#scores").show();
    clearInterval(intervalId);
        $("#wrapper").hide();
        console.log(correct);
        console.log(incorrect);
        console.log(unanswered);
        $("#correct").html("<h6>" + "Correct Answers:&nbsp" + "</h6>" + "<h6>" + correct + "</h6>");
        $("#incorrect").html("<h6>" + "Incorrect Answers:&nbsp" + "</h6>" + "<h6>" + incorrect + "</h6>");
        $("#unanswered").html("<h6>" + "Unanswered:&nbsp" + "</h6>" + "<h6>" + unanswered + "</h6>");
        newGameBtn();
}

// new game button
function newGameBtn () {
    $("#newGameBtn").show();
    $("#newGameBtn").on("click", function (){
        currentQuestion = -1;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        newQA();
        $("#scores").hide();
        $("#newGameBtn").hide();
        $("#wrapper").show();
    });  
}

// init screen
startBtn();

    // buttons
    $("#display-choice-a").on("click", function (){
        userGuess = 0
        checkAnswer();
    });

    $("#display-choice-b").on("click", function (){
        userGuess = 1
        checkAnswer();
    });
    $("#display-choice-c").on("click", function (){
        userGuess = 2
        checkAnswer();
    });
    $("#display-choice-d").on("click", function (){
        userGuess = 3
        checkAnswer();
    });


});


