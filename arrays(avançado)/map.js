//map retorna um novo array alterado e sempre terá o mesmo tamnho do array original

const numeros = [5, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// function callbackMap(valor, indice, array){
//     return valor*2;
// }

//const numerosDobro = numeros.map(callbackMap);

//essa função abaixo é a mesma função de cima
const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro);


////////////////////////////

const pessoas = [
    { nome: 'Ayrles', idade: 24 },
    { nome: 'Enoque', idade: 28 },
    { nome: 'Babi', idade: 10 },
    { nome: 'Alda', idade: 51 },
    { nome: 'Adonias', idade: 54 },
    { nome: 'CashMe', idade: 5 }
]
const pessoasNomes = pessoas.map(valor => valor.nome);
console.log(pessoasNomes);

const pessoasIdade1 = pessoas.map((valor) => ({idade: valor.idade}));
console.log(pessoasIdade1);


//criando um novo array pra n modificar o original

const pessoasId1 = pessoas.map((valor, indice) => {
    const newPessoas = { ...valor }
    newPessoas.id = indice;
    return newPessoas;
});
console.log(pessoasId1);

const pessoasIdade0 = pessoas.map((valor) => {
    const newPessoas = { ...valor }
    delete newPessoas.nome
    return newPessoas;
});
console.log(pessoasIdade0);


console.log(pessoas);



//////////////////
//abaixo modificando o array original

const pessoasId = pessoas.map((valor, indice) => {
    valor.id = indice;
    return valor;
});
console.log(pessoasId);


const pessoasIdade = pessoas.map((valor) => {
    delete valor.nome
    return valor;
});
console.log(pessoasIdade);


console.log(pessoas);
