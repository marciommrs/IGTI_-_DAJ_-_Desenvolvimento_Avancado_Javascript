let observer = new MutationObserver(mutationRecords => console.log(mutationRecords));

observer.observe(document.getElementById('elem'), {
    //Observar tudo menos atributos.
    childList: true,
    subtree: true,
    characterDataOldValue: true
});