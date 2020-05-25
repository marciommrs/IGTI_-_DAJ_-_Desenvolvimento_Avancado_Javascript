var btn = document.getElementById('btn');
var btnReset = document.getElementById('btnReset');

btn.addEventListener('click', fSubmit);
btnReset.addEventListener('click', fReset);

function fSubmit(event) {
    alert('Enviando dados');
    document.getElementById('ent').submit();
    alert('Informações enviadas');
}

function fReset(event) {    
    document.getElementById('ent').reset();
}