//retorna valor em si(iteráveis, arrays ou strings)

const nome = 'Ayrles Sales';

const frutas = ['pera', 'uva', 'maçã'];

const pessoa = {
    nome: 'Ayrles',
    sobrenome: 'Sales'
}

for (let i of nome) {
    console.log(i)
};

for (let value of frutas) {
    console.log(value)
};

for (let value of pessoa.nome) {
    console.log(value)
};
