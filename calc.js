function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    let inputField = document.getElementById('res');
    inputField.value = inputField.value.slice(0, -1);
}

function Solve(value) {
    let inputField = document.getElementById('res');
    inputField.value += value;
}

function Result() {
    let inputField = document.getElementById('res');
    try {
        inputField.value = eval(inputField.value.replace(/x/g, '*').replace(/%/g, '/100'));
    } catch (e) {
        inputField.value = 'Error';
    }
}
