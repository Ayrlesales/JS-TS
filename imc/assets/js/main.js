const P = document.querySelector('#peso');
const altu = document.querySelector('#altura');

const envio = document.querySelector('.formulario');
envio.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const calculo = (P.value) / (altu.value * altu.value);
    const calcDuasC = calculo.toFixed(2);


    const mostra = document.querySelector('.resultado');

    const abai = document.querySelector('.abaixo').innerHTML;
    const nor = document.querySelector('.normal').innerHTML;
    const g = document.querySelector('.grau').innerHTML;
    const gr = document.querySelector('.grauu').innerHTML;
    const gra = document.querySelector('.grauuu').innerHTML;

    if (calcDuasC < 18.5) {
        mostra.innerHTML = 'Seu IMC é ' + calcDuasC + ` (${abai})`;
    }
    else if (calcDuasC > 18.5 && calcDuasC < 24.9) {
        mostra.innerHTML = 'Seu IMC é ' + calcDuasC + ` (${nor})`;
    }
    else if (calcDuasC > 30 && calcDuasC < 34.9) {
        mostra.innerHTML = 'Seu IMC é ' + calcDuasC + ` (${g})`;
    }
    else if (calcDuasC > 35 && calcDuasC < 39.9) {
        mostra.innerHTML = 'Seu IMC é ' + calcDuasC + ` (${gr})`;
    }
    else if (calcDuasC > 40) {
        mostra.innerHTML = 'Seu IMC é ' + calcDuasC + ` (${gra})`;
    }
    else { 
        mostra.innerHTML = 'Se IMC é ' + calcDuasC;
    }
})