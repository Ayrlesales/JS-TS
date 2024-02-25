const falar = {
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const pessoaPrototype = Object.assign({...falar, ...comer, ...beber})

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const p1 = criaPessoa("Babi", "lady")
p1.falar()
p1.comer()
p1.beber()

console.log()

const p2 = criaPessoa("lady", "babi")
p2.falar()
p2.comer()
p2.beber()
