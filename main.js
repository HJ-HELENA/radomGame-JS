let randomNum = 0
let inputArray = "";
let playButton = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
playButton.addEventListener("click",play); //  함수를 변수처럼 넘김



function pickRandomNum() {
    randomNum = Math.floor(Math.random() *100) +1; // Math.random() : 0~1 사이의 숫자 반환
    console.log(randomNum)
}

function play() {
   let userValue = userInput.value;
   if(userValue < randomNum) {
    resultArea.textContent = "UP"
   }else if(userValue > randomNum){
    resultArea.textContent = "DOWN"
   }else {
    resultArea.textContent = "정답!"
   }
   
}

pickRandomNum();
