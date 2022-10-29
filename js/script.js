const resetBtn = document.getElementById("reset");
const inputPeople = document.getElementById("people");
const billSpan = document.getElementById("bill-error");
const inputBill = document.getElementById("bill");
const peopleSpan = document.querySelector(".people-error");
const tipAmount = document.querySelector(".tip-amount");
const tipTotal = document.querySelector(".tip-total");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twenty = document.querySelector(".twenty");
const twentyFive = document.querySelector(".twenty-five");
const custom = document.querySelector(".custom");
const format = (num, decimals) =>
num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

five.addEventListener("click", ()=> {
    peopleError();
    calculate(inputBill.value, 5);
    billError();
});

ten.addEventListener("click", ()=> {
    peopleError();
    calculate(inputBill.value, 10);
    billError();
});

fifteen.addEventListener("click", ()=> {
    peopleError();
    calculate(inputBill.value, 15);
    billError();
});

twenty.addEventListener("click", ()=> {
    peopleError();
    calculate(inputBill.value, 20);
    billError();
});

twenty-five.addEventListener("click", ()=> {
    peopleError();
    calculate(inputBill.value, 25);
    billError();
});

custom.addEventListener("input", ()=>{
    peopleError();
    calculate(inputBill.value, custom.value);
    billError();
});

function calculate(number, percent){
    if (
        !number == 0 &&
        !percent == 0 &&
        number > 0 &&
        inputPeople.value > 0 &&
        custom.value > 0
    ){
        tipAmount.innerHTML = format(
            ((number / inputPeople.value) * percent) / 100
        );
        tipTotal.innerHTML = format(
            ((number / inputPeople.value) * percent) / 100 + inputBill.value / inputPeople.value
        );
    }
}

function peopleError(){
    if(inputPeople.value <= 0){
        peopleSpan.innerHTML = "Cannot be zero";
        inputPeople.style.border = "1.5px solid red";
    }
    else{
        peopleSpan.innerHTML = "";
        inputPeople.style.border = "1.5px solid green";
    }
}

function billError(){
    if(inputBill.value <= 0){
        billSpan.innerHTML = "Cannot be zero";
        inputBill.style.border = "1.5px solid red";
    }
    else{
        billSpan.innerHTML = "";
        inputBill.style.border = "1.5px solid green";
    }
}

resetBtn.addEventListener("click", ()=>{
    inputPeople.value = "";
    inputBill.value = "";
    tipAmount.innerHTML = "Ksh 0.00";
    tipTotal.innerHTML = "Ksh 0.00";
    billSpan.innerHTML = "";
    peopleSpan.innerHTML = "";
    inputBill.style.border = "1.5px solid green";
    inputPeople.style.border = "1.5px solid green";
});