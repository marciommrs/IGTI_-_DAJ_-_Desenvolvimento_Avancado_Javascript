window.addEventListener('beforeunload', function(event) {
    console.log('Antes de sair');
});

window.addEventListener('unload', function(event) {
    console.log('Deseja sair?');
});