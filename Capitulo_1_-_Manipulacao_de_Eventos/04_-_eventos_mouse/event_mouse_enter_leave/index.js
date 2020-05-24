var p = document.querySelector('p');

/**
 * MouseEnter e MouseLeave não passa dentro dos subelementos,
 * além de não fazer o borbulhamento, ao contrário do mouseouver e
 * mouseout.
 */
p.addEventListener('mouseenter', fMouseEnter);
p.addEventListener('mouseleave', fMouseLeave);

function fMouseEnter(event) {
    event.target.textContent = 'O mouse está passando por aqui.';
}

function fMouseLeave(event) {
    event.target.textContent = 'Passe o mouse';
}