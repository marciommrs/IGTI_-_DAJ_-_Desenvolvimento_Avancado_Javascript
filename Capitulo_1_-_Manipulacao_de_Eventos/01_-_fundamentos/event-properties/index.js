var btn = document.querySelector('button');
var lkn = document.querySelector('a');

function alerta(event) {
    window.alert(`O evento ${event.type} foi disparado pelo ${event.target.tagName}`);
}
//btn.onclick = alerta; // Adicionando função ao manipulador "onclick" do elemento button.
btn.addEventListener('click', alerta); // Adicionando função com addEventListener.


lkn.onclick = function(event) { // Adicionando função anônima ao manipulador "onclick" do elemento link.
window.alert(`O evento ${event.type} foi disparado pelo ${event.target.tagName}`);
}