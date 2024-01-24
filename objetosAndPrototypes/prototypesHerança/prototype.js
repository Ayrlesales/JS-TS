//criar métodos fora da função construtora(esse mesmo método pode ser usado em vários outros objetos(FC))
//new cria um objeto vazio e aponta o this para o objeto vazio

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const p1 = new Produto('camisa', 50)
p1.desconto('50')
console.log(p1)
