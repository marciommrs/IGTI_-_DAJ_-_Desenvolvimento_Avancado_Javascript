var p = document.querySelector('p');

p.addEventListener('mouseover', fMouseOver);
p.addEventListener('mouseout', fMouseOut);

function fMouseOver(event) {
    event.target.textContent = 'O mouse está passando por aqui.';
}

function fMouseOut(event) {
    event.target.textContent = 'Passe o mouse';
}