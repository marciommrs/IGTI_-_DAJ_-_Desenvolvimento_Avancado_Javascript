var inp = document.querySelector('#a');

inp.addEventListener('beforeinput', fBeforeInput);

function fBeforeInput(event) {
    document.querySelector('#b').textContent = event.target.value;
}

inp.addEventListener('input', fInput);

function fInput(event) {
    document.querySelector('#c').textContent = event.target.value;
}