var btn = document.querySelector('button');

//Checagem para todos os navegadores
if ( btn.attachEvent ) {
    btn.attachEvent('onclick', alerta); // Adicionando função com attachEvent.
} else if ( btn.addEventListener ) {
    btn.addEventListener('click', alerta); // Adicionando função com addEventListener.
}

function alerta(event) {
    var o_evento = event ? event : window.event; // Verificação de compatibilidade de navegador.

    alert(`A posição X é ${o_evento.screenX}`);
}

