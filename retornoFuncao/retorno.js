function soma(a, b) {
    return a + b;
}

console.log(soma(2, 7));
let s = soma(23, 14);
console.log(s);



function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
}

const p1 = criaPessoa('ayrles', 'sales');
const p2 = {
    nome: 'enoque',
    sobrenome: 'Guthierrez'
}

console.log(p1);
console.log(p2);



function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);
console.log(olaMundo('mundo!'));
