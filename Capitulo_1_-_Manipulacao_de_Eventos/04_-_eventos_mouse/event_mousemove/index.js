var div = document.querySelector('#a');

div.addEventListener('mousemove', fFocusMouse);

function fFocusMouse(event) {
    document.querySelector('#b').textContent =
        `Coordenadas (${event.clientX}, ${event.clientY})`;
        //ScreenX - relacionada a window
        //ClientX - relacionada a página
}