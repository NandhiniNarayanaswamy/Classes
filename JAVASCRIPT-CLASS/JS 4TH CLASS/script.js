const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let quiz = document.getElementById('quiz')
let questionHeading = document.getElementById('questionHeading')
let optionList = document.querySelectorAll('.optionList')
let aOption = document.getElementById('aOption')
let bOption = document.getElementById('bOption')
let cOption = document.getElementById('cOption')
let dOption = document.getElementById('dOption')
let submitBtn = document.getElementById('submitBtn')
let currentQuizCount = 0
let score = 0
// console.log(quizData)
// console.log(quizData[currentQuizCount])

loadQuiz()

function loadQuiz() {
    deSelectOption()
    console.log("Load Quiz")
    let currentQuizData = quizData[currentQuizCount]
    console.log(currentQuizData)

    questionHeading.innerText = currentQuizData.question
    aOption.innerText = currentQuizData.a
    bOption.innerText = currentQuizData.b
    cOption.innerText = currentQuizData.c
    dOption.innerText = currentQuizData.d
}

function deSelectOption() {
    // checked=false 
    optionList.forEach((element) => element.checked = false)
}

function getSelected() {
    // return the answer
    let selectedanswer;
    optionList.forEach((element) => {
        if (element.checked) {
            // console.log(element.id)
            selectedanswer = element.id
        }
    })
    return selectedanswer;
}

submitBtn.addEventListener('click', () => {
    let answer = getSelected()
    console.log(answer)
    if (answer) {
        if (answer == quizData[currentQuizCount].correct) {
            score++;
        }
        console.log("score", score)
        currentQuizCount++;
        if (currentQuizCount < quizData.length) {
            loadQuiz()
        } else {
            // quiz.innerText=score;
            quiz.innerHTML = (`
                <h2>You Scored ${score}/${quizData.length}</h2>
                <button class="submitBtn" onClick=location.reload()>Reload</button>
            `)
            document.body.style.backgroundColor = "red"
            // document.body.style.backgroundImage="url('https://i.pinimg.com/originals/07/03/48/0703483f8e3100d87497817030fb903f.gif')"
        }
    }
    console.log("show next QUestion", currentQuizCount)


})