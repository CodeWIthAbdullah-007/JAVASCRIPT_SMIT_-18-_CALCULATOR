var input = document.getElementById('inp');

function calculate(e) {
    input.value = input.value + e;
}

function equal() {
    input.value = eval(input.value);
}

function cl() {
    input.value = "";
}
