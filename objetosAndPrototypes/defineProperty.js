function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque; 

    Object.defineProperty(this, 'preco', {
        enumerable: true,
        value: preco,
        writable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true
        }
    })
}

const p1 = new Produto('camiseta', 15, 30);
p1.preco = 10;
p1.estoque = 29;
console.log(p1);