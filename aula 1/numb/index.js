const numb = prompt("digite um número:");
const numbInt = parseFloat(numb)

const nTitulo = document.getElementById('nPrinci');
nTitulo.innerHTML = numbInt;

const raiz = (numbInt ** (1/2));
const nRaizQ = document.getElementById('calcR');
nRaizQ.innerHTML = raiz;

const inteiro = Number.isInteger(numbInt);
const eInteiro = document.getElementById('int');
const verFals = document.getElementById('f_or_T');
eInteiro.innerHTML = numbInt;   
verFals.innerHTML = inteiro;

const eNumb = isNaN(numbInt);
const numero = document.getElementById('eNumb_or_N');
numero.innerHTML = eNumb;

const arreBaixo = Math.floor(numbInt);
const buscaBaixo = document.getElementById('baixo');
buscaBaixo.innerHTML = arreBaixo;

const arreCima = Math.ceil(numbInt);
const buscaCima = document.getElementById('cima');
buscaCima.innerHTML = arreCima;

const duasCasas = numbInt.toFixed(2);
const buscaDecimal = document.getElementById('decimal');
buscaDecimal.innerHTML = duasCasas;
