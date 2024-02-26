const velo = Symbol('velocidade')
export default class Carro {
    constructor(modelo) {
        this.modelo = modelo
        this[velo] = 0
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[velo] = valor
    }

    get velocidade() {
        return this[velo]
    }

    acelerar() {
        if (this[velo] >= 100) return
        this[velo]++
    }

    freiar() {
        if (this[velo] <= 0) return
        this[velo]--
    }
}

// const car1 = new Carro('fusca')
// const car2 = new Carro('gol')
// const car3 = new Carro('sandero')

// for (let i = 0; i <= 200; i++){
//     car1.acelerar()
// }

// for (let i = 0; i <= 250; i++){
//     car2.acelerar()
// }

// for (let i = 0; i <= 400; i++){
//     car3.acelerar()
// }

// Object.freeze(car1)

// car1[velo] = 1500
// car2[velo] = 1500
// car3.velocidade = 15

// console.log(car1)
// console.log(car2)
// console.log(car3)
