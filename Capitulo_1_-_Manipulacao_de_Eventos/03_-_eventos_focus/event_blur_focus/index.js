var input = document.getElementById('a');

input.addEventListener('blur', inputBlur);
input.addEventListener('focus', inputFocus);

function inputBlur(event) {
    event.target.value = 'Foco perdido';
}

function inputFocus(event) {
    event.target.value = 'Foco recebido';
}