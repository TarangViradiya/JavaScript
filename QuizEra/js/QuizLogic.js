import { quizQuestions } from "./Questions.js"; // fetch only object from Questions.js


// get subject and level from query string (from index.html)

let param = new URLSearchParams(window.location.search)
let subject = param.get('subject')
let level = param.get('level')

let QuestionList = []
let index = 0
let score = 0

// get all the elements for doing different operation on it 

const ques = document.getElementById("question")
const opt = document.querySelectorAll(".option")
const res = document.getElementById("result")
const BackToDash = document.getElementById("backbtn")
const QueCount = document.getElementById("que-counter")

const previous = document.getElementById("previous")
const next = document.getElementById("next")

const timerDiv = document.getElementById("timer-div")
const timerElement = document.getElementById("timer")

const countdownContainer = document.getElementById("countdown-container")
const countNumber = document.getElementById("count-number")
const clickText = document.getElementById("click-text")

//this is main quiz section
const section = document.querySelector(".section")

// ================= SOUND =================
let tick = new Audio("./sound/tick.mp3")
let tickEnd = new Audio("./sound/tickend.mp3")

// first of all , main quiz panel is none
section.style.display = "none"
clickText.style.cursor = "pointer"

// this function will say that the subject and level which are chosing by user is present in object or not 
function SelectedTopic(subject, level) {
    if (quizQuestions[subject][level]) {
        QuestionList = quizQuestions[subject][level]
    } else {
        alert("Something went wrong!")
        window.location.href = "index.html"
    }
}

SelectedTopic(subject, level)

// this is a main logic of palce the que,opt,queCounter,pre,next in the html tag from an object
function loadQuiz() {
    let ActiveQuestion = QuestionList[index]

    ques.innerHTML = ActiveQuestion.question


    opt.forEach((btn, i) => {
        btn.textContent = ActiveQuestion.options[i]
        btn.onclick = () => checkAnswer(ActiveQuestion.options[i])
    })

    QueCount.innerText = `${index + 1} of ${QuestionList.length}`

    // if(index==0){
    //     previous.disabled
    // }
   
    // if(index== QuestionList.length - 1){
    //     next.disabled
    // }
    previous.disabled = index === 0
    next.disabled = index === QuestionList.length - 1


    timer()
}

// navigate que by previous and next btn
previous.onclick = () => {
    if (index > 0) {
        index--
        loadQuiz()
    }
}

next.onclick = () => {
    if (index < QuestionList.length - 1) {
        index++
        loadQuiz()
    }
}

// check the answer of each que

function checkAnswer(value) {
    if (value === QuestionList[index].answer){
        score++
    } 
        
    if (index < QuestionList.length - 1) {
        index++
        loadQuiz()
    } else {
        finishQuiz()
    }
}

// hide the quiz panel and display the result 

function finishQuiz() {
    ques.innerHTML = "Your Quiz is completed 🎉"
    res.innerHTML = `Your Score : ${score} / ${QuestionList.length}`

    BackToDash.classList.remove("none")
    timerDiv.style.display = "none"
    QueCount.style.display = "none"
    previous.style.display = "none"
    next.style.display = "none"

    opt.forEach((btn) => {
        btn.style.display = "none"
    })
}

// countdown starts on click
clickText.onclick = () => {
    clickText.style.display = "none"
    startCountDown()
}

function startCountDown() {
    let count = 5

    let interval = setInterval(() => {
        if (count > 0) {
            countNumber.innerText = count
            tick.play()
            count--
        } else if (count === 0) {
            countNumber.innerText = "Let's Start!"
            tickEnd.play()
            count--
        } else {
            clearInterval(interval)
            countdownContainer.style.display = "none"
            section.style.display = "block"
            loadQuiz()
        }
    }, 1000)
}

// timer for each que
let startTimer

function timer() {

    clearInterval(startTimer)
    let second = 10

    startTimer = setInterval(() => {
        if (second >= 0) {
            timerElement.innerHTML = `00:${second < 10 ? "0" : ""}${second}`
            second--
        } else {
            clearInterval(startTimer)
            if (index < QuestionList.length - 1) {
                index++
                loadQuiz()
            } else {
                finishQuiz()
            }
        }
    }, 1000)
}
