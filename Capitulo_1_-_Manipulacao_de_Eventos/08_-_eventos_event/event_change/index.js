var inp = document.getElementById('inp');

inp.addEventListener('change', fChange);

//A função só é invocada após o elemento alterado
//perder o foco.
function fChange(event) {
    alert('Elemento alterado.');
}