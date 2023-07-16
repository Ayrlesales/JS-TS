let mostra = document.querySelector('h1');
const data = new Date();
mostra.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date());


/*
const data = new Date();

const dia = data.getDay();
const diaN = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

function pegaDia(dia) {
    dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return dias[dia];
}
let diaSemanaFeiras = pegaDia(dia);

function pegaMes(mes) {
    meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[mes];
}
let pegaMesAtual = pegaMes(mes);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
};

let mostra = document.querySelector('h1')

mostra.innerHTML = `${diaSemanaFeiras}, ${diaN} de ${pegaMesAtual} de ${ano} às ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`
*/

/*
let mostra = document.querySelector('h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

mostra.innerHTML = data.toLocaleString('pt-br', opcoes);
*/


/*
const data = new Date();

const dia = data.getDay();
const diaN = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

function pegaDia() {
    let diaSemana;
    if (dia === 0) {
        diaSemana = 'domingo'
    }
    else if (dia === 1) {
        diaSemana = 'segunda'
    }
    else if (dia === 2) {
        diaSemana = 'terça'
    }
    else if (dia === 3) {
        diaSemana = 'quarta'
    } else if (dia === 4) {
        diaSemana = 'quinta'
    } else if (dia === 5) {
        diaSemana = 'sexta'
    } else if (dia === 6) {
        diaSemana = 'sábado'
    }
    return diaSemana;
};
let diaSemanaFeiras = pegaDia()


function pegaMes(mes) {
    let mAtual;
    if (mes === 0) {
        mAtual = 'janeiro'
    }
    else if (mes === 1) {
        mAtual = 'fevereiro'
    }
    else if (mes === 2) {
        mAtual = 'março'
    }
    else if (mes === 3) {
        mAtual = 'abril'
    }
    else if (mes === 4) {
        mAtual = 'maio'
    }
    else if (mes === 5) {
        mAtual = 'junho'
    }
    else if (mes === 6) {
        mAtual = 'julho'
    }
    else if (mes === 7) {
        mAtual = 'agosto'
    }
    else if (mes === 8) {
        mAtual = 'setembro'
    }
    else if (mes === 9) {
        mAtual = 'outubro'
    }
    else if (mes === 10) {
        mAtual = 'novembro'
    }
    else if (mes === 11) {
        mAtual = 'dezembro'
    }
    return mAtual
};
let pegaMesAtual = pegaMes(mes);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
};

let mostra = document.querySelector('h1')

mostra.innerHTML = `${diaSemanaFeiras}, ${diaN} de ${pegaMesAtual} de ${ano} às ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`
*/
