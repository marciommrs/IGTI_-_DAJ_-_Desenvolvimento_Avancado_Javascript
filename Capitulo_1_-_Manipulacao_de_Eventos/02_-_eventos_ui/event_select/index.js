document.getElementById('a').addEventListener('select', slFunction);

function slFunction(event) {
    let selecao = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    document.getElementById('b').textContent = selecao;    
}