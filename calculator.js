function plus() {
    let firstNum = document.getElementById("first number").value;
    let secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) + Number(secondNum);
        console.log("Answer is:", ans);
        negativeNum(ans);
        document.getElementById("result").innerHTML = ans;
    }
}

function minus(){
    const firstNum = document.getElementById("first number").value;
    const secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) - Number(secondNum);
        console.log("Answer is:", ans);
        negativeNum(ans);
        document.getElementById("result").innerHTML = ans;
    }
}

function divide(){
    const firstNum = document.getElementById("first number").value;
    const secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) / Number(secondNum);
        console.log("Answer is:", ans);
        negativeNum(ans);
        document.getElementById("result").innerHTML = ans;
    }
}

function multiply(){
    const firstNum = document.getElementById("first number").value;
    const secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) * Number(secondNum);
        console.log("Answer is:", ans);
        negativeNum(ans);
        document.getElementById("result").innerHTML = ans;
    }
}

function powerUp(){
    const firstNum = document.getElementById("first number").value;
    const secondNum = document.getElementById("second number").value;
    let initial = 1
    if (isNotNumber(firstNum, secondNum) === false) {
        for (let i = 1; i <= secondNum; i++){
            initial *= firstNum
        }
        console.log("Answer is:", initial);
        negativeNum(initial);
        document.getElementById("result").innerHTML = initial;
    }

}

function negativeNum(result){
    res = document.getElementById("background-calc");
    if(result >= 0){
        res.style.background = "green";
        res.style.color = "white";
    }
    if(result < 0){
        res.style.background = "red";
        res.style.color = "white";
    }
}

function clearInput(){
    document.getElementById("first number").value="";
    document.getElementById("second number").value="";
    document.getElementById("result").innerHTML = "Clear!";
}

function isNotNumber(num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        ans = "HEY TYPE THE CORRECT NUMBER"
        document.getElementById("result").innerHTML = ans;
        console.log("isNotNumber performed: ", ans);
        return true;
    }else{
        return false;
    }

}