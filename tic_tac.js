
 
const startBtn = document.querySelector(".btnStart");
const modalWindow = document.querySelector(".modal");
const newGameBtn = document.querySelector(".modal .input_btn");
const input = document.querySelector(".modal  .inputCell ");
const gameArea = document.querySelector(".game");
const title = document.querySelector(".area .game .title");
const controlBtn = document.querySelector(".control");
const restartBtn = document.querySelector(".btn_restart");
const quitGame = document.querySelector(".btn_quit");
const winnerWindow = document.querySelector(".winner");
const winnerText = document.querySelector(".winner h2");
// const soundtrack = document.querySelector(".audio");

// addEventListener

startBtn.addEventListener("click", openModal)
newGameBtn.addEventListener("click", createBlock)
restartBtn.addEventListener("click", restartGame)
quitGame.addEventListener("click",Gamequit)

controlBtn.style.display = "none"

function playSong(){

    document.getElementById("audio").play() 
}

startBtn.addEventListener('click', () => {
    playSong();
})

let song = document.getElementById("audio")

song.onended = function() {

    playSong();

}

function mute(){

    song.volume  = (song.volume == 1) ? 0 : 1
    let muted = document.getElementById("mute")
    muted.src = (song.volume == 1) ? "icons/volume.png" : "icons/mute.png"

}


function openModal(){
    input.focus()

    modalWindow.classList.add("active")
    startBtn.style.display="none"
    
}



var result = []

function createBlock(e) {
console.log(result);

    e.preventDefault()
    var n = input.value
    for(var i = 0; i < n; i++) {

        result.push([])
        for(var j = 0; j < n; j++){
            var div = document.createElement("div")
            result[i].push(div)         
            div.classList.add("block")
            gameArea.appendChild(div)

            gameArea.style.width = `${n*50}px`
            gameArea.style.height = `${n*50}px`
        }
    }
    modalWindow.style.display = "none"
    input.value=""
    title.innerHTML = 'Player X Start'
    title.style.fontSize = "1.2rem"
    controlBtn.style.display = "initial"      
}



var qayl = 0;

gameArea.onclick = function (e) {
if (e.target.innerHTML) return;
document.innerHTML = "Go X"

if (e.target.classList == "block") {
if (qayl % 2 == 0) {
e.target.innerHTML = "❌"
title.innerHTML = "Player O's turn"
} else {
e.target.innerHTML = "〇"
title.innerHTML = "Player X's turn"
}
qayl++
}

checkWinner()
}


function checkWinner() {

if (qayl == result.length ** 2) {
winnerWindow.classList.add('active');
winnerText.innerHTML = ` Oho, let's restart `;
winnerText.innerHTML += ' <i class="fa-solid fa-face-smile"></i> '
}


//
for (let i = 0; i < result.length; i++) {
var countX = 0, countY = 0;
for (let j = 0; j < result.length; j++) {
if (result[i][j].innerHTML == "❌") {
countX++

if (result.length == countX) {
winnerWindow.classList.add("active")
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;

}

} else if (result[i][j].innerHTML == "〇") {
countY++

if (result.length == countY) {
winnerWindow.classList.add("active")
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is O `;

}
}
}
}

for (let j = 0; j < result.length; j++) {
var countX = 0, countY = 0;
for (let i = 0; i < result.length; i++) {
if (result[i][j].innerHTML == "❌") {
countX++

if (result.length == countX) {
winnerWindow.classList.add("active")
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;

}

} else if (result[i][j].innerHTML == "〇") {
countY++

if (result.length == countY) {
winnerWindow.classList.add("active")
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is O `;

}
}
}
}

var countX = 0, countY = 0;
for(let i = 0; i < result.length;i++){
if (result[i][i].innerHTML == '❌') {
countX++;
if (result.length == countX) {
winnerWindow.classList.add('active');
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
}
} else if (result[i][i].innerHTML == '〇'){
countY++;
if (result.length == countY) {
winnerWindow.classList.add('active');
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is 0 `;
}
}

}

var countX = 0, countY = 0;
for (var j = 0; j < result.length; j++) {

if (result[j][result.length - 1 - j].innerHTML == '❌') {
countX++;
if (result.length == countX) {
winnerWindow.classList.add('active');
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
}
} else if (result[j][result.length - 1 - j].innerHTML == '〇') {
countY++;
if (result.length == countY) {
winnerWindow.classList.add('active');
winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is 〇 `;
}
}
}



}


function restartGame(){
    location.reload()
}

function Gamequit(){
    window.close()
    location.reload()
}


// let flag = false;

document.onkeydown = function (event) {

    if(event.code == "AltLeft") flag = true;
    if(event.code =="ControlLeft"){
    alert("Cheat Code Activated!");
    qayl-=1}
}


