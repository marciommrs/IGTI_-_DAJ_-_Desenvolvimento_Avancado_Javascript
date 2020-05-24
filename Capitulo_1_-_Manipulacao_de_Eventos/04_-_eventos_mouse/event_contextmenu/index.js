var lkn = document.querySelector('a');

/**
 * Evento relacionado com o clique do botão direito do mouse.
 */
lkn.addEventListener('contextmenu', rightButtonClick);

function rightButtonClick(event) {
    alert('Menu de context acessado');
}