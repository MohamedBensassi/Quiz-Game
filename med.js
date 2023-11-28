
$(document).ready(function () { ////This jQuery function ensures that the enclosed code 
    ////runs after the HTML document is fully loaded
    $('body').css('background-color','rgba(137, 138, 177,0.5')
var game = {                   
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    questions: [ // An array of obeject representing quiz questions 
        {// Each question has a question, image, answers, and correctAnswer property
            question: "What was the score in the Euro 2012 final?",
            image: "euro.jpg",
            answers: ["2-0", "3-0", "4-0", "5-0"],
            correctAnswer: "4-0",
        },
        {
            question: "Who won the Man of the Match award in the 2014 World Cup final?",
            image: "2014.jpg",
            answers: ["Mario Goetze", "Sergio Aguero", "Lionel Messi", "Bastian Schweinsteiger"],
            correctAnswer: "Mario Goetze",
        },
        {
            question: "Against which country did Wayne Rooney break the England goalscoring record?",
                image: "roney.jpg",
                answers: ["Ukraine", "Switzerland", "Montenegro", "San Marino"],
                correctAnswer: "Switzerland",
                
            },{
            question: "Jamie Vardy was signed by Leicester from which non-league side?",
                image: "vardy.jpg",
                answers: ["Ketting Town", "Alfreton Town", "Grimsby Town", "Fleetwood Town"],
                correctAnswer: "Fleetwood Town",
                
            }, {
                question: "Against which country did Wayne Rooney break the England goalscoring record?",
                    image: "roney.jpg", 
                    answers: ["Blackburn", "Hull", "Wigan", "Norwich"],
                    correctAnswer: "Wigan",
                    
                }, {
                    question: "Which English club was the first to win the European Cup?",
                        answers: ["Manchester United", "Liverpool", "Nottingham Forest", "Aston Villa"],
                        correctAnswer: "Manchester United",
                        image: "cup.jpg",
                        
                    }, {
                        question: "The first World Cup competition started in which year?",
                            image: "worldcup.jpg",
                            answers: ["1930", "1934", "1938", "1942"],
                            correctAnswer: "1930",
                            
                        },
    ],
    loadQuestion: function () { ////// //////method: Loads the current question into the HTML. If there are more questions,
        //// it updates the question, image, and answer buttons.
        ///// Otherwise, it calls the results method to display the quiz results
        if (this.currentQuestion < this.questions.length) {
            let q = this.questions[this.currentQuestion];
            $('#subwrapper').html("<h2>" + q.question + "</h2>");
            $('#quiz-image').attr('src', q.image);
            for (let i = 0; i < q.answers.length; i++) {
                $('#subwrapper').append('<button class="answer-button" data-name="' + q.answers[i] + '">' + q.answers[i] + '</button>');
            }
        } else {
            this.results();
        }
    },
    nextQuestion: function () {//////method: Increments the 
        /////currentQuestion property and then calls the loadQuestion method to load the next question.
        this.currentQuestion++;
        this.loadQuestion();
    },
    clicked: function (e) {/////method: Handles the user's click on an answer button. It compares the user's answer with the correct answer, 
        //increments the correct or incorrect counters accordingly, and then calls the nextQuestion method to load the next question
        let userAnswer = $(e.target).data("name");
        let correctAnswer = this.questions[this.currentQuestion].correctAnswer;
        if (userAnswer == correctAnswer) {
            this.correct++;
        } else {
            this.incorrect++;
        }
        this.nextQuestion();
    },
    results: function () {////method: Displays the quiz 
        //completion message and the number of correct and incorrect answers.
        $('#subwrapper').html('<h2>Quiz Complete!</h2>');
        $('#subwrapper').append(" Correct: " + this.correct + '<br/>');
        $('#subwrapper').append(" Incorrect: " + this.incorrect + '<br/>');
    },
    start: function () {////method: Initializes the quiz by resetting properties and calling loadQuestion.
        // It also hides the start button when the quiz starts
        this.currentQuestion = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
        $("#start").hide(); // Hide the start button when the quiz starts
    }
};


    $("#reset").hide(); // Initially hide the reset button
// Click event handler for the start button
    $("#start").click(function () {
        game.start();// Call the start method of the game object
    });

    $("#subwrapper").on("click", ".answer-button", function (e) {
        game.clicked(e);////Call the clicked method of the game object, passing the event object e
    });
});