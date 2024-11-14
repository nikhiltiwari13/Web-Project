const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choiceBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");

// Array of Questions and answer
const quiz = [
    {
      question: "Q. Which CSS property is used to change the text color of an element?",
      choices: ["color", "background-color", "font-color", "text-color"],
      answer: "color"
    },
    {
      question: "Q. In HTML, what tag is used to link an external CSS file?",
      choices: ["<link>", "<style>", "<css>", "<href>"],
      answer: "<link>"
    },
    {
      question: "Q. Which of the following is NOT a valid CSS selector?",
      choices: [".class-selector", "#id-selector", "*-selector", "element-selector"],
      answer: "*-selector"
    },
    {
      question: "Q. What is the correct syntax for declaring a JavaScript variable?",
      choices: ["var myVar;", "let myVar;", "const myVar;", "variable myVar;"],
      answer: "const myVar;"
    },
    {
      question: "Q. How do you add a comment in JavaScript?",
      choices: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "' This is a comment"],
      answer: "// This is a comment"
    }
  ];
  

//   variables declaration
let currentQuestionIndex = 0;
let score = 0;
let gaveOver = false;
let timeLeft = 15;
let timerID = null;

// function to show question and options
const showQuestion = () => {
    let questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choiceBox.textContent = "";
    for(let i=0; i<questionDetails.choices.length; i++){
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement("div");
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add("choice");
        choiceBox.appendChild(choiceDiv);
    
        choiceDiv.addEventListener("click", () => {
            if(choiceDiv.classList.contains("selected")){
                choiceDiv.classList.remove("selected");
            }
            else{
                choiceDiv.classList.add("selected");
            }
        })
    }
    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}


// function to check answer
const checkAnswer = () => {
    let selectedAnswer = document.querySelector(".choice.selected").textContent
    if(selectedAnswer === quiz[currentQuestionIndex].answer){
        showAlert("Correct answer!")
        score++;
    }
    else{
        showAlert(`Wrong answer! ${quiz[currentQuestionIndex].answer} is correct answer`)
    }
    timeLeft = 15;
    currentQuestionIndex++;
    if(currentQuestionIndex < quiz.length){
        showQuestion();
    }
    else {
        showScore();
        stopTimer();
    }
}

// function to show score
const showScore = () => {
    questionBox.textContent = "";
    choiceBox.textContent = ""
    scoreCard.textContent = `You scored ${score} out of ${quiz.length}`
    showAlert("Game is over!")
    nextBtn.textContent = "Play Again"
    gaveOver = true;
    timer.style.display = "none";
}

// function for alert
const showAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000)
}

// function form timer
const startTimer = (() =>{
    clearInterval(timerID);
    timer.textContent = timeLeft;

    const countDown = (() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            let userConfirm = confirm("Time up!! Press ok to continue")
            if(userConfirm){
                timeLeft = 15;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
            
        }
    })
    timerID = setInterval(countDown, 1000);
})

// function to stop timer
const stopTimer = () => {
    clearInterval(timerID)
}

const startQuiz = () => {
    timeLeft = 15;
    timer.style.display = "flex";
    showQuestion();
}

// function for start button
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
})


// showQuestion();
nextBtn.addEventListener("click", () => {
    selectedAnswer = document.querySelector(".choice.selected")
    if(!selectedAnswer && nextBtn.textContent === "Next"){
        // alert("Select your answer")
        showAlert("Select your answer!");
        return;
    }
    if(gaveOver){
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        score = 0;
        gaveOver = false;
        startQuiz();
    }
    else{
        checkAnswer();
    }
})

