function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque; 
    let preco1 = preco;

    Object.defineProperty(this, 'preco', {
        enumerable: true,
        // value: preco,
        // writable: false
        get: function() {
            return preco1
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('bad value')
            }
            preco1 = valor;
        } 
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
console.log(p1);
p1.preco = 10;
p1.estoque = 29;
console.log(p1.preco);

console.log(Object.getOwnPropertyDescriptor(p1, 'preco'))
console.log(Object.getOwnPropertyDescriptors(p1, 'nome', 'estoque'))
