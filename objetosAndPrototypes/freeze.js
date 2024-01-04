function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pes = new Pessoa('ayrles', 'sales')
Object.freeze(pes)
pes.nome = 'lily'
console.log(pes)
