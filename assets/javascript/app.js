$( document ).ready(function() {

    // var gameRunning = false;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeLeft = 5;
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
        question: "In the game of pool, what is the standard color for the one ball?",
        choices: ["Red", "Yellow", "Orange", "Blue"],
        answer: 1
    },
    {
        question: "A fortnight is a unit of time equal to how many days?",
        choices: ["5 Days", "3 Days", "14 Days", "7 Days"],
        answer: 2
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
    timeLeft = 5;
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

    if (currentQuestion == 2) {
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
            }, 5000);
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
            }, 5000);
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
        }, 5000);
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
        }, 5000);
    }
}

// // set up decrement value -1
function decrement() {
    timeLeft--;
    $("#time-left").html("<h2>" + "Time Remaining:&nbsp" + "</h2>" + "<h2>" + timeLeft + "</h2>");
    if (timeLeft <= 0) {
        if (currentQuestion == 2) {
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
        },5000);
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
        },5000);
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


