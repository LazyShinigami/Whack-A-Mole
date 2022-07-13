const start = document.getElementById("start")
const pause = document.getElementById("pause")
start.addEventListener("click", startGame)
pause.addEventListener("click", pauseGame)
let movement
let countDownTimerID
function startGame() {
    start.removeEventListener("click", startGame)
    movement = setInterval(moveMole, 650)
    countDownTimerID = setInterval(countDown, 1000)
}

function pauseGame() {
    let movementPause = clearInterval(movement)
    let countDownTimerIDPause = clearInterval(countDownTimerID)
    moleImage.removeEventListener("mousedown", niceHit)
    start.addEventListener("click", startGame)
}


const timeLeft = document.querySelector("#timeLeft")

let result = 0
let remainingTime = 60
function countDown() {
    if (remainingTime > 0) {
        remainingTime -= 1
        timeLeft.textContent = remainingTime
    }
    else {
        timeLeft.textContent = "TIME UP!"
    }
}


// =========================================================

// CREATTING A MOLE ON A RANDOM TILE FOR 60 SECS
let pos = 0
const moleImage = document.createElement("img")
moleImage.src = "images/Mole.jpg"
moleImage.style.height = "8rem"
moleImage.style.width = "8rem"
moleImage.style.borderRadius = "50%"
moleImage.style.position = "relative"


let moleSquare = null
function moleGenerator() {
    let oldPos = pos
    pos = Math.ceil(Math.random() * 8)
    if (pos === oldPos) {
        pos += 1
    }

    moleSquare = document.getElementById(pos)
    moleSquare.append(moleImage)
    moleImage.addEventListener("mousedown", niceHit)
}

function moveMole() {
    if (remainingTime > 0) {
        moleGenerator()
    }
}

// =========================================================

// POINT SYSTEM
let points = 0
let hitId
const squares = Array.from(document.querySelectorAll(".square"))
const score = document.querySelector("#score")

function niceHit() {
    moleImage.removeEventListener("mousedown", niceHit)
    points += 100
    score.textContent = points
}


