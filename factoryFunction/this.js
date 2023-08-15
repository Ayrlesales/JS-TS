function criaPessoa(nome, sobrenome, a) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${nome} está ${assunto}`;
        },
        altura: a,
        peso: 48,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        // imc() {
        //     const indice = this.peso / (this.altura ** 2);
        //     return indice.toFixed(2);
        // }
    };
}

const p1 = criaPessoa('Ayrles', 'Otávio', 1.6);
console.log(p1.fala('falando sobre a Grécia'));
console.log(p1.imc); //método getter só ler o valor e não altera
// console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.7);
console.log(p2.fala('falando sobre Carrossel'));
console.log(p2.imc); //método getter só ler o valor e não altera
// console.log(p2.imc());

//this será sempre quem chamou o objeto. Na linha 11 this é o p1(linha 19) ou o p2(linha 22)
/*this também consegue acessar o valor da chave, exemplo linha 9(peso:48) 
e no caso de (altura: a) como também acessar o valor dessa chave pelo parâmetro*/