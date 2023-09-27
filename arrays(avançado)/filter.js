//filter retorna um novo array filtrado

const numeros = [5, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// function callbackFilter(valor, indice, array){
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);

//essa função abaixo é a mesma função de cima
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

////////////////////////////


const pessoas = [
    { nome: 'Ayrles', idade: 24 },
    { nome: 'Enoque', idade: 28 },
    { nome: 'Babi', idade: 10 },
    { nome: 'Alda', idade: 51 },
    { nome: 'Adonias', idade: 54 },
    { nome: 'CashMe', idade: 5 }
]
const pessoasFiltradas = pessoas.filter(valor => valor.nome.length > 6);
console.log(pessoasFiltradas);

const pessoasFiltradasTerminaA = pessoas.filter(valor => valor.nome.endsWith('a'));
console.log(pessoasFiltradasTerminaA);

const pessoasFiltradasIniciadasA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().startsWith('a'));
console.log(pessoasFiltradasIniciadasA);

const pessoasIdadesFiltradas = pessoas.filter(valor => valor.idade > 50);
console.log(pessoasIdadesFiltradas);