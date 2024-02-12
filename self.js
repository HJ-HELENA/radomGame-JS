let chances = 10;
let randomNumber = 0;
let resultArea = document.getElementById("resultArea");
let chanceArea = document.getElementById("chanceArea");
chanceArea.textContent =`남은기회는 ${chances}번`
let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");
let userInput = document.getElementById("userInput");
let historyArea = document.getElementById("historyArea")
let gameOver = false;
let historyArr =[];

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("click", function() {
    userInput.value =""
})


function play() {
    let userValue = userInput.value;

    //1~100 유효성검사
    if(userValue < 1 || userValue > 100){
        alert("1에서 100까지의 숫자만 입력가능합니다")
        userInput.value="" // 초기화
        return false;
    }

    if(historyArr.includes(userValue)){
        alert("이미 입력하신 숫자입니다")
        userInput.value="" // 초기화
        return false;
    }

    chances--;
    chanceArea.textContent =`남은기회는 ${chances}번`

    if(userValue > randomNumber) {
        resultArea.textContent ="DOWN"
    }else if(userValue <randomNumber) {
        resultArea.textContent ="UP!"
    }else if(userValue = randomNumber) {
        resultArea.textContent="정답!"
        gameOver =true;

    }

    historyArr.push(userValue);
    

    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }else {
        playButton.disabled = false;
    }
}


function pickRandomNum() {
    randomNumber = Math.floor(Math.random()*100)+1;
    chanceArea.textContent =`남은기회는 ${chances}번`
}

function reset() {
    userInput.value = ""
    pickRandomNum();
    historyArr =[]
    chances =10;
    chanceArea.textContent =`남은기회는 ${chances}번`
    playButton.disabled = false;
}

pickRandomNum();
