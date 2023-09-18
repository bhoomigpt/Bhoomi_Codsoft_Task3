let screenValue = document.getElementById("calc")

function clearAll(){
    screenValue.value = " "
}
function display(value){
    screenValue.value += value
}

function calculate(){
    screenValue.value = eval(screenValue.value)
}
