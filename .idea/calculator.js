function plus() {
    let firstNum = document.getElementById("first number").value;
    let secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) + Number(secondNum);
        console.log("Answer is:", ans);
        document.getElementById("result").innerHTML = ans;
    }
}

function minus(){
    const firstNum = document.getElementById("first number").value;
    const secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) - Number(secondNum);
        console.log("Answer is:", ans);
        document.getElementById("result").innerHTML = ans;
    }
}

function divide(){
    const firstNum = document.getElementById("first number").value;
    const secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) / Number(secondNum);
        console.log("Answer is:", ans);
        document.getElementById("result").innerHTML = ans;
    }
}

function multiply(){
    const firstNum = document.getElementById("first number").value;
    const secondNum = document.getElementById("second number").value;
    if (isNotNumber(firstNum, secondNum) === false) {
        let ans = Number(firstNum) * Number(secondNum);
        console.log("Answer is:", ans);
        document.getElementById("result").innerHTML = ans;
    }
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