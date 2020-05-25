var name = "Maria";
surName = "da Silva";

var idade = 17;

console.log(name);
console.log('surName' in window);

/**
 * Variáveis "inicializadas" dentro de uma função
 * são acessiveis no escopo global. Já as declaradas
 * não são acessíveis.
 */
function anoNascimento() {
    ano = 2020 - idade;// inicializadas
    var ano2 = 2020 - idade;// declaradas
    return ano;
}

console.log('ano' in window); // Variável inicializada acessível no escopo global.
console.log('ano2' in window); // Variável declarada não acessível no escopo global.