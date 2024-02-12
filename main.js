let randomNum = 0;
let playButton = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetButton = document.getElementById("resetButton");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chanceArea");
let historyArray = [];



playButton.addEventListener("click",play); //  함수를 변수처럼 넘김
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value=""
})


function pickRandomNum() {
    randomNum = Math.floor(Math.random() *100) +1; // Math.random() : 0~1 사이의 숫자 반환
    console.log(randomNum)
}

function play() {
    let userValue = userInput.value;
    console.log(userValue)
   if(userValue < 1 || userValue > 100) {
    //resultArea.textContent = "1부터 100사이의 숫자를 입력해주세요";
     alert("1부터 100사이의 숫자를 입력해주세요")
    userInput.value ="";
    return false;
   }

   if(historyArray.includes(userValue)){
    alert("한 번 입력한 숫자는 다시 입력할 수 없습니다")
    userInput.value =""
    return false;
   }

//    for(let a of historyArray) {
//     if(a == userValue)
//     alert("한 번 입력한 숫자는 다시 입력할 수 없습니다. 다른 숫자를 입력해주세요")
//     userInput.value="";
//     return false;
//    }

   chances -- ;
//    chanceArea.textContent ="남은기회 : "+chances  + " 번"
   chanceArea.textContent =`남은기회 ${chances}번`

   if(userValue < randomNum) {
    resultArea.textContent = "UP"
   }else if(userValue > randomNum){
    resultArea.textContent = "DOWN"
   }else {
    resultArea.textContent = "정답!"
    chanceArea.textContent="";
    gameOver = true;
    
   }

   historyArray.push(userValue);

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }else {
        playButton.disabled = false;
    }
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과값이 나옵니다"
    chanceArea.textContent =`남은기회 ${chances}번`
    playButton.disabled = false;
}

pickRandomNum();
