let lastOperand = 0;
let operation = null;
let arr = [];
let point = false;

document.getElementById('delete').addEventListener('click', function () {
    if (inputWindow.value.length < 1){
        inputWindow.value = 0;
    }
    else {
        inputWindow.value = inputWindow.value.substr(0, inputWindow.value.length - 1);
    }
})

document.getElementById('percent').addEventListener('click', function () {
    arr = [];
    document.getElementById('resultOut').innerHTML = '';
    lastOperand = parseFloat(inputWindow.value);
    const result = lastOperand/100;
    arr.push(lastOperand + '% ' + ' = ' + result);
    document.getElementById('resultOut').innerHTML = arr;
    inputWindow.value = result;
    point = false;
})

document.getElementById('clear').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = "0";
    arr = [];
    document.getElementById('resultOut').innerHTML = '';
    point = false;
})

document.getElementById('plus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "plus";
    inputWindow.value = '';
    point = false;
})

document.getElementById('minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "minus";
    inputWindow.value = '';
    point = false;
})

document.getElementById('multiply').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "multiply";
    inputWindow.value = '';
    point = false;
})

document.getElementById('share').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "share";
    inputWindow.value = '';
    point = false;
})

document.getElementById('inversion').addEventListener('click', function () {
    inputWindow.value = -parseFloat(inputWindow.value);
    point = false;
})

document.getElementById('root').addEventListener('click', function () {
    arr = [];
    document.getElementById('resultOut').innerHTML = '';
    lastOperand = parseFloat(inputWindow.value);
    const result = Math.sqrt(lastOperand);
    arr.push('&radic;' + parseFloat(inputWindow.value) + ' = ' + result);
    document.getElementById('resultOut').innerHTML = arr;
    inputWindow.value = result;
    point = false;
})

document.getElementById('result').addEventListener('click', function () {
    
    if (operation === "plus") {
            arr = [];
            document.getElementById('resultOut').innerHTML = '';
            const result = lastOperand + parseFloat(inputWindow.value);
            arr.push(lastOperand + ' + ' + parseFloat(inputWindow.value) + ' = ' + result);
            document.getElementById('resultOut').innerHTML = arr;
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
    }

    if (operation === "minus") {
        arr = [];
        document.getElementById('resultOut').innerHTML = '';
        const result = lastOperand - parseFloat(inputWindow.value);
        arr.push(lastOperand + ' - ' + parseFloat(inputWindow.value) + ' = ' + result);
        document.getElementById('resultOut').innerHTML = arr;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    if (operation === "multiply") {
        arr = [];
        document.getElementById('resultOut').innerHTML = '';
        const result = lastOperand * parseFloat(inputWindow.value);
        arr.push(lastOperand + ' * ' + parseFloat(inputWindow.value) + ' = ' + result);
        document.getElementById('resultOut').innerHTML = arr;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    if (operation === "share") {
        arr = [];
        document.getElementById('resultOut').innerHTML = '';
        const result = lastOperand / parseFloat(inputWindow.value);
        arr.push(lastOperand + ' / ' + parseFloat(inputWindow.value) + ' = ' + result);
        document.getElementById('resultOut').innerHTML = arr;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    point = false;
})

document.getElementById('numOne').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '1';
})

document.getElementById('numTwo').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '2';
})

document.getElementById('numThree').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '3';
})

document.getElementById('numFour').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '4';
})

document.getElementById('numFive').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '5';
})

document.getElementById('numSix').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '6';
})

document.getElementById('numSeven').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '7';
})

document.getElementById('numEight').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '8';
})

document.getElementById('numNine').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '';
    inputWindow.value += '9';
})

document.getElementById('numZero').addEventListener('click', function () {
    if (inputWindow.value.length == 1 && inputWindow.value == 0)
    inputWindow.value = '0';
    else {
    inputWindow.value += '0';
    }
})

document.getElementById('point').addEventListener('click', function () {
    if (point == true){
        inputWindow.value += '';
    }
    else {
        inputWindow.value += '.';
    }
    point = true
})




