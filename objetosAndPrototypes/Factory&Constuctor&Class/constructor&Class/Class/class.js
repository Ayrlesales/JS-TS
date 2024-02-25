/* class é uma função construtora. 
Foram introduzidas no ECMAScript 6 e são simplificações da linguagem para as heranças baseadas nos protótipos
A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. 
É apenas uma abstração! Ou seja, uma forma mais simples de criar objetos e lidar com herança.
*/

// desse modo, os métodos são atrelados diretamente/automaticamente ao prototype

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

const p1 = new Pessoa('babi', 'lady')
console.log(p1)
p1.comer()