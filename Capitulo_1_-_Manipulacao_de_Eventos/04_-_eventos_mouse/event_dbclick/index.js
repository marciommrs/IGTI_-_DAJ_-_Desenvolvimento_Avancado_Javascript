var btn = document.querySelector('button');

btn.addEventListener('dblclick', alerta, false);

function alerta(event) {
    alert(`A posição X é: ${event.screenX}`);
}
