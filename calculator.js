const display = document.getElementById("display");

function appendToDisplay(input){
    display.value = display.value + input;
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    display.value = eval(display.value)
}

window.alert(`Hola mundo`);