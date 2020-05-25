var inp = document.querySelector('#a');

inp.addEventListener('keydown', fKeydown);
inp.addEventListener('keyup', fKeyup);

function fKeydown(event) {
    event.target.style.backgroundColor = 'blue';
}

function fKeyup(event) {
    event.target.style.backgroundColor = '';
}