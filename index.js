function showOnDisplay(value) {
    document.forms[0].display.value += value;
}

function calculatePercentage() {
    var expression = document.forms[0].display.value;
    var result = eval(expression) / 100;
    document.forms[0].display.value = result;
}

function calculateSin() {
    var expression = document.forms[0].display.value;
    var radians = eval(expression);
    var result = Math.sin(radians);
    document.forms[0].display.value = result;
}

function calculateDeg() {
    var expression = document.forms[0].display.value;
    var radians = eval(expression);
    var degrees = (radians * 180) / Math.PI;
    document.forms[0].display.value = degrees;
}

function Result() {
    try {
        document.forms[0].display.value = eval(document.forms[0].display.value);
    } catch (error) {
        document.forms[0].display.value = 'Error';
    }
}