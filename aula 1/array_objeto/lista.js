const lista = [];

const nome = document.querySelector("#nome");
const sobreNome = document.querySelector("#sobreNome");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");


const envio = document.querySelector("#formulario");
envio.addEventListener('submit', (evento) => {
    evento.preventDefault();
    lista.push({
        nome: nome.value,
        sobrenome: sobreNome.value,
        peso: peso.value,
        altura: altura.value
    })
    const resulta = document.querySelector('.resultado');
    resulta.innerHTML += `<p> nome: ${nome.value} ${sobreNome.value}, peso: ${peso.value}, altura: ${altura.value} </p>`;
});





/*
const lista = [
    {
    nome:'ayrles',
    sobrenome:'sales',
    peso:46,
    altura:1.60
}
]

console.log(lista)

lista.push({nome:'enoque',
sobrenome:'oliveira',
peso:76,
altura:1.7})
*/