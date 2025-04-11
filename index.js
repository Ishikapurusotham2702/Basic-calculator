const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}
function squareRoot(){
    let value = parseFloat(document.getElementById("display").value);
    if(value>=0){
        document.getElementById("display").value = Math.sqrt(value);
    }
    else{
        document.getElementById("display").value="Err";
    }
}
function calculatePercentage(){
    let value = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = value/100;
}
function memoryAdd(){
    memory += parseFloat(document.getElementById("display").value) || 0;
}
function memorySubtract(){
    memory -= parseFloat(document.getElementById("display").value) || 0;
}
function memoryRecall(){
    document.getElementById("display").value = memory;
}
function memoryClear(){
    memory = 0;
}
function calculateResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Err";
    }
}
