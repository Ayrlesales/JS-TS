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




function saudacao(inicio) {
    function turno(fim) {
        return inicio + ' ' + fim;
    }
    return turno;
}

const fala = saudacao('bom');
console.log(fala);
const continua = fala('dia');

console.log(continua);




function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica);
console.log(triplica);
console.log(quadriplica);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));