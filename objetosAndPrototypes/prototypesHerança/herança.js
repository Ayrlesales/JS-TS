function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('regata', 10, 'azul')
const caneca = new Caneca('Caneca', 30, 'Porcelana')

console.log(produto)
console.log(camiseta)
console.log(caneca)