var div_a = document.querySelector('#a');
var div_b = document.querySelector('#b');

//div_a.addEventListener('click', click, false); // Captura "false".
//div_b.addEventListener('click', click, false); // Evento borbulhado para os elementos superiores.

div_a.addEventListener('click', click, true); // Captura "true".
div_b.addEventListener('click', click, true); // Começa do ancestrar e vai até o elemento alvo.

function click(event) {
    alert(`Alerta do elemento ${this.innerHTML}`)
}