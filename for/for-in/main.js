//retorna o índice ou chave (string, array ou objetos)

const frutas = ['pera', 'uva', 'maçã'];

for (let i in frutas) {
    console.log(frutas[i])
};

const pessoa = {
    nome: 'Ayrles',
    sobrenome: 'Sales',
    idade: 23
};

for (let i in pessoa) {
    console.log(pessoa[i])
};

for (let i in pessoa) {
    console.log(pessoa.nome)
};

for (let i in pessoa) {
    console.log(pessoa['idade'])
};