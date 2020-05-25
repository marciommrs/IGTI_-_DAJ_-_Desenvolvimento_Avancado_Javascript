teste();

function teste() { //Hoisting - função é movida para o topo.
    console.log(name);
}

var name = 'Maria'; //Hoisting - variável é movida para o topo.