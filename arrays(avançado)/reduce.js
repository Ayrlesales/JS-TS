const numeros = [5, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//o reduce tem como objetivo reduzir para retornar um unico valor
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
});
console.log(total);


//o reduce pode ser usado para executar tarefas parecidas com o map e o filter porém não é uma boa prática
const exemploFilter = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(exemploFilter);

const exemploMap = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(exemploMap);



const pessoas = [
    { nome: 'Ayrles', idade: 24 },
    { nome: 'Enoque', idade: 28 },
    { nome: 'Babi', idade: 10 },
    { nome: 'Alda', idade: 51 },
    { nome: 'Adonias', idade: 54 },
    { nome: 'CashMe', idade: 5 }
]
//Acumulador muda com o retorno (return), é sempre o retorno anterior ou o valor inicial que você escolher.

//1 ayrles = acumulador & enoque = valor; return valor --> valor = acumulador
//2 enoque = acumulador & babi = valor; return acumulador
//3 enoque = acumulador & alda = valor; return valor --> valor = acumulador
//4 alda = acumulador & adonias = valor; return valor --> valor = acumulador
//5 adonias = acumulador & cashme = valor; return valor --> valor = acumulador
const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(pessoaMaisVelha);